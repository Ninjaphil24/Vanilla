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
            linkTitle: "Opt Link",
            user: {
                name: "Phil",
                role: "user", // or user or guest
                onLine: true
            }
        }
    },
    computed: {
        profileStyle() {
            return {
                border: this.user.onLine === true ? '2px solid green' : '2px solid gray',
                color: this.user.role === 'admin' ? 'red' : this.user.role === 'user' ? 'yellow' : 'white',
                fontWeight: this.user.role === 'admin' ? 'bold' : 'normal'

            }
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
        let user = reactive({
            name: "Phil",
            role: "user", // or user or guest
            onLine: true
        })
        let profileStyle = computed(() => {
            return {
                border: user.onLine === true ? '2px solid green' : '2px solid gray',
                color: user.role === 'admin' ? 'red' : user.role === 'user' ? 'yellow' : 'white',
                fontWeight: user.role === 'admin' ? 'bold' : 'normal'

            }
        })


        return { linkURL, linkTitle, user, profileStyle }
    },
    render() {
        this.setupResult = this.setup()
        const { linkURL, linkTitle, user } = this.setupResult
        console.log(user.name)
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>V-Bind View Page</h2>
        <div>
            <a id="v-bind">Go to link</a>
        </div>
        <div id="profileCard">
            <h2 id="userName">${useCompositionAPI.value ? user.name : optionsObj.state.user.name}</h2>
        </div>
        `
        this.clone = template.content.cloneNode(true)
        const vboundAnchor = this.clone.getElementById('v-bind')

        function bindToLink() {
            vboundAnchor.setAttribute('href', linkURL.value)
            // vboundAnchor.setAttribute('title', linkTitle.value)
            vboundAnchor.setAttribute('title', optionsObj.state.linkTitle)
        }

        bindToLink()
        this.update()
        return this.clone
    },
    update() {
        const userName = this.clone.getElementById('userName')
        if (useCompositionAPI.value) {
            this.setupResult = this.setup()
            const { profileStyle } = this.setupResult
            userName.style.border = profileStyle.value.border
            userName.style.color = profileStyle.value.color
            userName.style.fontWeight = profileStyle.value.fontWeight
        } else {
            let profileStyle = optionsObj.computed.profileStyle.value
            userName.style.border = profileStyle.border
            userName.style.color = profileStyle.color
            userName.style.fontWeight = profileStyle.fontWeight
        }

    }

}

export default VBindView