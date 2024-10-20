<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OptLifeCycle',
    props: {
        sendProp: String
    },
    emits: ['toggle'],
    data() {
        return {
            loading: true,
            loggedInUser: '',
            username: '',
            password: '',
            loggedIn: false,
            darkMode: true,
        }
    },
    methods: {
        login() {
            console.log("Opt Fetch")
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            }).then(response => response.json())
                .then(data => {
                    localStorage.setItem('jwt', data.token)
                    this.loggedIn = true
                    this.loading = false
                    this.loggedInUser = this.username
                }).catch(error => {
                    console.log(error)
                    this.loggedIn = false
                    localStorage.removeItem('jwt')
                })
        },
        logout() {
            this.loggedIn = false
            localStorage.removeItem('jwt')
        },
        toggleColor() {
            this.darkMode = !this.darkMode
            this.$emit("toggle", this.darkMode)
            this.darkMode ? localStorage.setItem('BG', 'dark') : localStorage.setItem('BG', 'light')
        }
    },
    beforeCreate() {
        console.log("Opt Token")
        const token = localStorage.getItem('jwt')
        if (token) {
            fetch('http://localhost:3000/', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => response.json())
                .then(data => {
                    if (data.user) {
                        this.loggedInUser = data.user.username
                        this.loading = false
                        this.loggedIn = true
                    } else if (data.Error) {
                        this.loading = false
                        this.loggedIn = false
                        localStorage.removeItem('jwt')
                    }
                }).catch(error => {
                    console.log(error)
                    this.loggedIn = false
                    localStorage.removeItem('jwt')
                })
        } else {
            // setTimeout(() => {
            //     this.loading = false
            //     this.loggedIn = false
            // }, 0)
            Promise.resolve().then(() => {
                this.loading = false
                this.loggedIn = false
            })
        }
    },
    created() {
        const bgState = localStorage.getItem('BG')
        bgState === 'dark' ? this.darkMode = true : this.darkMode = false
    },
    beforeMount() {
        this.$emit("toggle", this.darkMode)
    },
    mounted() {
        console.log("$el log:")
        console.log(this.$el)
        this.$el.parentElement.children[1].textContent = "Filled div"
    }
})
</script>

<template>
    <div></div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="loggedIn">
        <h2>{{ loggedInUser }}</h2>
        <form @submit.prevent="logout">
            <button type="submit">Logout</button>
        </form>
    </div>
    <div v-else>
        <form @submit.prevent="login">
            <input type="text" v-model="username" placeholder="Username">
            <input type="password" v-model="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>
