<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OptionsAPIComponent',
    data() {
        return {
            user: {
                name: "Phil",
                city: "New York"
            },
            nameBool: true
        }
    },
    methods: {
        toggleName() {
            this.nameBool = !this.nameBool
            this.nameBool ? this.user.name = "Phil" : this.user.name = "Philip"
            console.log("Options Toggle")

            return this.user.name
        }
    }
})
</script>

<template>
    <h2>{{ user.name }}</h2>
    <button @click="toggleName">Click</button>
</template>
