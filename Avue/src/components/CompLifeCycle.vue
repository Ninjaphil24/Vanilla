<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'CompLifeCycle',

    setup() {
        const loggedInUser = ref('')
        const loggedIn = ref(false)
        const loading = ref(true)
        async function tokenCheck() {
            console.log("Comp Token")
            const token = localStorage.getItem('jwt')
            if (token) {
                try {
                    const response = await fetch('http://localhost:3000/', {
                        method: 'GET',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    const data = await response.json()
                    if (data.user) {
                        loggedInUser.value = data.user.username
                        loggedIn.value = true
                        loading.value = false
                    } else if (data.Error) {
                        loggedIn.value = false
                        localStorage.removeItem('jwt')
                    }
                } catch (error) {
                    console.log(error)
                    loggedIn.value = false
                    localStorage.removeItem('jwt')
                }

            } else {
                loading.value = false
                loggedIn.value = false
            }
        } // tokenCheck End

        tokenCheck()

        const username = ref('')
        const password = ref('')

        async function login() {
            try {
                console.log("Comp Fetch")
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username.value,
                        password: password.value
                    })
                })

                const data = await response.json()

                localStorage.setItem('jwt', data.token)
                loggedIn.value = true
                loading.value = false
                loggedInUser.value = username.value

            } catch (error) {
                console.log(error)
                loggedIn.value = false
                localStorage.removeItem('jwt')
            }
        } // login End

        function logout() {
            loggedIn.value = false
            localStorage.removeItem('jwt')
        }

        return {
            loading,
            loggedInUser,
            loggedIn,
            tokenCheck,
            username,
            password,
            login,
            logout
        }
    } // setup End
})
</script>

<template>
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
