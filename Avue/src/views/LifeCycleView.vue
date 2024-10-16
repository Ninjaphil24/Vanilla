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
    },
    methods: {
        toggleFromParent() {
            const componentToggle = this.$refs.currentComponent as any;
            componentToggle.toggleColor()
            // console.log("Refs Object: ")
            // console.log(this.$refs)
        },
        receivedEmit() {

        }
    }
})
</script>

<template>
    <div id="title">
        <h1>LifeCycle</h1>
        <component :is="currentComponent" ref="currentComponent" @toggle="receivedEmit"></component>
    </div>
    <div id="btn">
        <button @click="toggleFromParent">Toggle</button>
    </div>
</template>

<style scoped>
#title {
    background-color: var(--color-background-mute);
}
</style>