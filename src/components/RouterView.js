class RouterView extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <template id="template-rv">
           <div id="container"></div>
        </template>
        `
        const template = document.querySelector('#template-rv')
        let clone = template.content.cloneNode(true)
        this.appendChild(clone)
    }
}

customElements.define('router-view', RouterView)

export default RouterView