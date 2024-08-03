import { computed } from '../library/vue.js'
import { useConfigStore } from '../store/config.js';
import { useCounterStoreComp, useCounterStoreOpt } from '../store/counter.js'
const configStore = useConfigStore
const useCompositionAPI = computed(() => configStore.useCompositionAPI.value)

const counter = computed(() => useCompositionAPI.value ? useCounterStoreComp : useCounterStoreOpt)
const getCount = () => useCompositionAPI.value ? counter.value.count.value : counter.value.count
const getDoubleCount = () => useCompositionAPI.value ? counter.value.doubleCount.value : counter.value.doubleCount
const home = {
    render: () => {
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>Home</h2>
        <p>Home Count: <span id="count">${getCount()}</span></p>
        <p>Double Count: <span id="doublecount">${getDoubleCount()}</span></p>
        
        <button id="incrementBtn">Increment</button>
        `
        let clone = template.content.cloneNode(true)
        const incrementBtn = clone.querySelector('#incrementBtn')
        incrementBtn.addEventListener('click', () => {
            counter.value.increment()
            home.update()

        })


        return clone
    },
    update: () => {
        document.getElementById('count').innerHTML = getCount()
        document.getElementById('doublecount').innerHTML = getDoubleCount()
    }
}

export default home