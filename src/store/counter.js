import { ref, computed } from '../library/vue.js'
import { defineStore } from '../library/pinia.js'

// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     const doubleCount = computed(() => count.value * 2)
//     function increment() {
//         count.value++
//     }

//     return { count, doubleCount, increment }
// })


export const useCounterStore = defineStore('counterOpt', {
    state: () => ({ count: 0 }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})