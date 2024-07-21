import { ref } from "vue";
import { defineStore } from "pinia";

export const useConfigStore = defineStore('config', () => {
    const useCompositionAPI = ref(true)

    const toggleAPI = () => {
        useCompositionAPI.value = !useCompositionAPI.value
    }

    return { useCompositionAPI, toggleAPI }
})