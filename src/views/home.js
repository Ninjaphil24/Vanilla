import { useCounterStore } from '../store/counter.js'
let counter = useCounterStore
const home = {
    render: () => {
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>Home</h2>
        <p>Home Count: <span id="count">${counter.count.value}</span></p>
        <p>Double Count: <span id="doublecount">${counter.doubleCount.value}</span></p>
        
        <button id="incrementBtn">Increment</button>
        `
        let clone = template.content.cloneNode(true)
        const incrementBtn = clone.querySelector('#incrementBtn')
        incrementBtn.addEventListener('click', () => {
            counter.increment()
            home.update()
        })


        return clone
    },
    update: () => {
        document.getElementById('count').innerHTML = counter.count.value
        document.getElementById('doublecount').innerHTML = counter.doubleCount.value
    }
}

export default home