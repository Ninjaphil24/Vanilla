<script lang="ts">
import { useConfigStore } from '@/stores/config';
import { defineComponent } from 'vue';
import CompPlayground from '@/components/CompPlayground.vue';
import OptPlayground from '@/components/OptPlayground.vue';

export default defineComponent({
    computed: {
        currentComponent() {
            const configStore = useConfigStore()
            return configStore.useCompositionAPI ? 'CompositionAPIComponent' : 'OptionsAPIComponent'
        }
    },
    components: {
        CompPlayground,
        OptPlayground
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