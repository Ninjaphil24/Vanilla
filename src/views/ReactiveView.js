import { createComponent } from "../library/vue.js"

const optionsObj = createComponent({
    data() {
        return {
            user: {
                name: "Phil",
                city: "New York"
            },
            nameBool: true
        }
    },
    methods: {
        toggleName() {
            this.nameBool = !this.nameBool
            this.nameBool ? this.user.name = "Phil" : this.user.name = "Philip"
            return this.user.name
        }
    }
})

const ReactiveView = {
    render: () => {
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>Reactive View Page</h2>
        <h3 id="name">${optionsObj.state.user.name}</h3>
                
        <button id="toggleNameBtn">ToggleName</button>
        `
        let clone = template.content.cloneNode(true)
        const toggleNameBtn = clone.querySelector('#toggleNameBtn')
        toggleNameBtn.addEventListener('click', () => {
            optionsObj.methods.toggleName()
            ReactiveView.update()

        })


        return clone
    },
    update: () => {
        document.getElementById('name').innerHTML = optionsObj.state.user.name
    }
}

export default ReactiveView