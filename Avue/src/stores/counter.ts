import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStoreComp = defineStore('counterComp', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
    console.log("Comp")
  }

  return { count, doubleCount, increment }
})

export const useCounterStoreOpt = defineStore('counterOpt', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
      console.log("Opt")
    },
  },
})