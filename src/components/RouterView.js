class RouterView extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <div id="container"></div>
    `
    }
}

customElements.define('router-view', RouterView)

export default RouterView