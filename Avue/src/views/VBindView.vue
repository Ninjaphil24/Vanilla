<script lang="ts">
import { useConfigStore } from '@/stores/config';
import { defineComponent } from 'vue';
import CompVBind from '@/components/CompVBind.vue';
import OptVBind from '@/components/OptVBind.vue';
export default defineComponent({
    computed: {
        currentComponent() {
            const configStore = useConfigStore()
            return configStore.useCompositionAPI ? 'CompVBind' : 'OptVBind'
        }
    },
    components: {
        CompVBind,
        OptVBind
    }
})
</script>

<template>
    <div id="title">
        <h1>Playground</h1>
        <component :is="currentComponent"></component>
    </div>
</template>

<style scoped>
#title {
    background-color: var(--color-background-mute);
}
</style>