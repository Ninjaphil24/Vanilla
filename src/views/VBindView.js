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
            linkURL: "https://philipmodinos.ueuo.com/",
            linkTitle: "Opt Link"
        }
    },
    methods: {

    }
})
// Composition API style
const VBindView = {
    setupResult: null,
    setup() {
        let linkURL = ref("https://philipmodinos.ueuo.com/")
        let linkTitle = ref("Comp Link")
        return { linkURL, linkTitle }
    },
    render() {
        this.setupResult = this.setup()
        const { linkURL, linkTitle } = this.setupResult
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>V-Bind View Page</h2>
        <div>
            <a id="v-bind">Go to link</a>
        </div>
        `
        let clone = template.content.cloneNode(true)
        const vboundAnchor = clone.getElementById('v-bind')

        function bindToLink() {
            vboundAnchor.setAttribute('href', linkURL.value)
            // vboundAnchor.setAttribute('title', linkTitle.value)
            vboundAnchor.setAttribute('title', optionsObj.state.linkTitle)
        }

        bindToLink()
        return clone
    },
    update() {

    }
}

export default VBindView