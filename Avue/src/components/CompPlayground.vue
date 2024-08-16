<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
    name: 'CompPlayground',
    setup() {
        const status = ref("none")

        const setStatus = (newStatus: string) => {
            status.value = newStatus
            console.log("Comp status")
        }

        return { status, setStatus }
    }
})
</script>
<template>
    <h3 v-if="status === 'none'">No Status</h3>
    <h3 v-else-if="status === 'status_one'">Status One</h3>
    <h3 v-else-if="status === 'status_two'">Status Two</h3>
    <h3 v-else-if="status === 'status_three'">Status Three</h3>
    <button @click="setStatus('status_one')">Status One</button>
    <button @click="setStatus('status_two')">Status Two</button>
    <button @click="setStatus('status_three')">Status three</button>
</template>