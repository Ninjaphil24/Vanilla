<script lang="ts">
import { useConfigStore } from '@/stores/config';
import { defineComponent } from 'vue';
import CompLifeCycle from '@/components/CompLifeCycle.vue';
import OptLifeCycle from '@/components/OptLifeCycle.vue';

export default defineComponent({
    computed: {
        currentComponent() {
            const configStore = useConfigStore()
            return configStore.useCompositionAPI ? 'CompLifeCycle' : 'OptLifeCycle'
        }
    },
    components: {
        CompLifeCycle,
        OptLifeCycle
    }
})
</script>

<template>
    <div id="title">
        <h1>LifeCycle</h1>
        <component :is="currentComponent"></component>
    </div>
</template>

<style scoped>
#title {
    background-color: var(--color-background-mute);
}
</style>