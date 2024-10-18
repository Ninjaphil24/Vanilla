<script lang="ts">
import { useConfigStore } from '@/stores/config';
import { defineComponent } from 'vue';
import CompLifeCycle from '@/components/CompLifeCycle.vue';
import OptLifeCycle from '@/components/OptLifeCycle.vue';

export default defineComponent({
    data() {
        return {
            isDarkMode: true,
            exampleProp: "Hello from parent"
        }
    },
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
        receivedEmit(darkMode: boolean) {
            console.log("Emitted darkMode: ", darkMode)
            this.isDarkMode = darkMode
        }
    }
})
</script>

<template>
    <div id="title" :class="isDarkMode ? 'darkBg' : 'lightBg'">
        <h1>LifeCycle</h1>
        <component :is="currentComponent" ref="currentComponent" @toggle="receivedEmit" :sendProp="exampleProp">
        </component>
    </div>
    <div id="btn">
        <button @click="toggleFromParent">Toggle</button>
    </div>
</template>

<style scoped>
.darkBg {
    background-color: rgb(61, 60, 60);
    color: aliceblue;
}

.lightBg {
    background-color: aquamarine;
    color: blue;
}
</style>