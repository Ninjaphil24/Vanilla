<script lang="ts">
import { reactive, ref, defineComponent } from 'vue';

export default defineComponent({
    name: 'CompositionAPIComponent',
    setup() {
        const user = reactive({
            name: "Phil",
            city: "New York"
        })

        const nameBool = ref(true)

        const toggleName = () => {
            nameBool.value = !nameBool.value
            nameBool.value ? user.name = "Phil" : user.name = "Philip"
            console.log("Composition Toggle")
            return user.name
        }

        return {
            user,
            toggleName
        }
    }
})
</script>

<template>
    <h2>{{ user.name }}</h2>
    <button @click="toggleName">Click</button>
</template>
