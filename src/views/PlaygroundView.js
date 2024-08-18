import { createComponent, reactive, ref } from "../library/vue.js"
import { computed } from '../library/vue.js'
import { useConfigStore } from '../store/config.js';
const configStore = useConfigStore
const useCompositionAPI = computed(() => configStore.useCompositionAPI.value)
console.log(useCompositionAPI.value)
// Options API style
const optionsObj = createComponent({
    data() {
        return {
            status: "status_one",
            showHideBool: true
        }
    },
    methods: {
        setStatus(newStatus) {
            this.status = newStatus
            PlaygroundView.update()
            console.log("Opt status")
        },
        showHideFunc(showHide) {
            this.showHideBool = !this.showHideBool
            this.showHideBool ? showHide.style.display = 'block' : showHide.style.display = 'none'
            console.log('Show/Hide Opt')
        },
        eventClicker(event) {
            console.log("Options: " + event.type)
        },
        eventKeydown: (event) => {
            if (event.key === 'Enter') console.log("Options: " + event.type)
        },
        eventKeydownOutput: (event, output) => {
            console.log("Options Output")
            output.innerHTML += event.key
        }
    }
})

window.setStatus = status => {
    useCompositionAPI.value ? PlaygroundView.setupResult.setStatus(status) : optionsObj.methods.setStatus(status)
}

// Composition API style
const PlaygroundView = {
    setupResult: null,
    setup() {
        const status = ref("status_one")

        const setStatus = (newStatus) => {
            status.value = newStatus
            PlaygroundView.update()
            console.log("Comp status")
        }

        const showHideBool = ref(true)
        const showHideFunc = (showHide) => {
            showHideBool.value = !showHideBool.value
            showHideBool.value ? showHide.style.display = 'block' : showHide.style.display = 'none'
            console.log(showHideBool.value)
            console.log("Show/Hide Comp")
        }

        const eventClicker = (event) => {
            console.log("Composition: " + event.type)
        }

        const eventKeydown = (event) => {
            if (event.key === 'Enter') console.log("Composition: " + event.type)
        }

        const eventKeydownOutput = (event, output) => {
            console.log("Composition Output")
            output.innerHTML += event.key
        }

        return { status, setStatus, showHideFunc, eventClicker, eventKeydown, eventKeydownOutput }
    },
    render() {
        this.setupResult = this.setup()
        const { status, setStatus, showHideFunc, eventClicker, eventKeydown, eventKeydownOutput } = this.setupResult
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>Playground</h2>
        <h3 id="statusMsg">No Status</h3>
                
        <button id="setStatus1">Status One</button>
        <button id="setStatus2">Status Two</button>
        <button id="setStatus3" onclick="setStatus('status_three')">Status Three</button>
        <br><br>
        <h3 id="showHide">Show me/Hide</h3>
        <button id="showHideBtn">Show/Hide</button>
        <br><br>
        <button id="eventClick">Event Click</button>
        <br><br>
        <input id="keyDownEvent" placeholder="Press Enter">
        <br><br>
        <h3 id="keydownEventOutput"></h3>
        `
        let clone = template.content.cloneNode(true)

        const setStatus1 = clone.querySelector('#setStatus1')
        setStatus1.addEventListener('click', () => {
            useCompositionAPI.value ? setStatus('status_one') : optionsObj.methods.setStatus('status_one')
            PlaygroundView.update()

        })

        const setStatus2 = clone.querySelector('#setStatus2')
        setStatus2.addEventListener('click', () => {
            useCompositionAPI.value ? setStatus('status_two') : optionsObj.methods.setStatus('status_two')
            PlaygroundView.update()

        })
        // Show Hide 
        const showHideBtn = clone.querySelector('#showHideBtn')
        const showHide = clone.querySelector('#showHide')
        showHideBtn.addEventListener('click', () => {
            useCompositionAPI.value ? showHideFunc(showHide) : optionsObj.methods.showHideFunc(showHide)
        })

        // Event Object
        const eventClickString = 'click'
        const eventClick = clone.querySelector('#eventClick')
        eventClick.addEventListener(eventClickString, () => {
            useCompositionAPI.value ? eventClicker(event) : optionsObj.methods.eventClicker(event)
        })

        const eventKeyDownEnter = 'keydown'
        const keydownInput = clone.querySelector('#keyDownEvent')
        const keydownEventOutput = clone.querySelector('#keydownEventOutput')

        keydownInput.addEventListener(eventKeyDownEnter, (event) => {
            if (useCompositionAPI.value) {
                eventKeydown(event)
                eventKeydownOutput(event, keydownEventOutput)
            } else {
                optionsObj.methods.eventKeydown(event)
                optionsObj.methods.eventKeydownOutput(event, keydownEventOutput)
            }
        })

        return clone
    },
    update() {
        const statusMsg = document.getElementById('statusMsg')
        if (useCompositionAPI.value) {
            if (this.setupResult.status.value === "status_one") statusMsg.innerHTML = "Status One"
            else if (this.setupResult.status.value === "status_two") statusMsg.innerHTML = "Status Two"
            else if (this.setupResult.status.value === "status_three") statusMsg.innerHTML = "Status Three"
        } else {
            if (optionsObj.state.status === "status_one") statusMsg.innerHTML = "Status One"
            else if (optionsObj.state.status === "status_two") statusMsg.innerHTML = "Status Two"
            else if (optionsObj.state.status === "status_three") statusMsg.innerHTML = "Status Three"
        }
    }
}

export default PlaygroundView