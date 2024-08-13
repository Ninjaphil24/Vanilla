<script lang="ts">
export default {
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
            return this.user.name
        }
    }
}
</script>

<template>
    <div id="title">
        <h1>Reactive View Page</h1>
        <h2>{{ user.name }}</h2>
        <button @click="toggleName">Click</button>
    </div>
</template>

<style scoped>
#title {
    background-color: var(--color-background-mute);
}
</style>