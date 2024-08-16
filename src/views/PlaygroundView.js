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
            status: "status_one"
        }
    },
    methods: {
        setStatus(newStatus) {
            this.status = newStatus
            PlaygroundView.update()
            console.log("Opt status")
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

        return { status, setStatus }
    },
    render() {
        this.setupResult = this.setup()
        const { status, setStatus } = this.setupResult
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>Playground</h2>
        <h3 id="statusMsg">No Status</h3>
                
        <button id="setStatus1">Status One</button>
        <button id="setStatus2">Status Two</button>
        <button id="setStatus3" onclick="setStatus('status_three')">Status Three</button>
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