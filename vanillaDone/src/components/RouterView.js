class RouterView extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const template = document.createElement('template')
        template.innerHTML = `
           <div id="container"></div>
        `
        let clone = template.content.cloneNode(true)
        this.appendChild(clone)
    }
}

customElements.define('router-view', RouterView)

export default RouterView