import { ref } from "../library/vue.js";
import { defineStore } from "../library/pinia.js";

export const useConfigStore = defineStore('config', () => {
    const useCompositionAPI = ref(true)

    const toggleAPI = () => {
        useCompositionAPI.value = !useCompositionAPI.value
        console.log(useCompositionAPI.value)
    }

    return { useCompositionAPI, toggleAPI }
})