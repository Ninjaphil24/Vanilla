<script lang="ts">
import { reactive, ref } from 'vue';

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
            console.log("Options Toggle")

            return this.user.name
        }
    }
    // setup() {
    //     const user = reactive({
    //         name: "Phil",
    //         city: "New York"
    //     })

    //     const nameBool = ref(true)

    //     const toggleName = () => {
    //         nameBool.value = !nameBool.value
    //         nameBool.value ? user.name = "Phil" : user.name = "Philip"
    //         console.log("Composition Toggle")
    //         return user.name
    //     }

    //     return {
    //         user,
    //         nameBool,
    //         toggleName
    //     }
    // }
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