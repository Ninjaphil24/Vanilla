<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OptLifeCycle',
    data() {
        return {
            loggedInUser: '',
            username: 'Jonathan Doe',
            password: '12345',
            loggedIn: false
        }
    },
    methods: {
        login() {
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
                })
        }
    },
    beforeCreate() {
        const token = localStorage.getItem('jwt')
        if (token) {
            fetch('http://localhost:3000/', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => response.json())
                .then(data => {
                    if (data.user.username) {
                        this.loggedInUser = data.user.username
                        this.loggedIn = true
                    }
                })
        }
    },
})
</script>

<template>
    <h2 v-if="loggedIn">{{ loggedInUser }}</h2>
    <div v-else>
        <form @submit.prevent="login">
            <button type="submit">Login</button>
        </form>
    </div>
</template>
