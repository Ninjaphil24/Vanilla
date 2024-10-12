<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OptLifeCycle',
    data() {
        return {
            username: 'Jonathan Doe',
            password: '12345',
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
                })
        }
    },
    beforeCreate() {
        const token = localStorage.getItem('jwt')
        fetch('http://localhost:3000/', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => response.json())
            .then(data => {
                console.log("Success with login")
            })
    },
})
</script>

<template>
    <form @submit.prevent="login">
        <button type="submit">Login</button>
    </form>
</template>
