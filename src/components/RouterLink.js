class RouterLink extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.attachShadow({ mode: "open" })
    }

    static get observedAttributes() {
        return ['to'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'to') {
            this.render()
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const to = this.getAttribute('to') || '/'
        this.shadowRoot.innerHTML = `
        <style>
            a {
                text-decoration: none;
                color: inherit;
                padding: 0 10px;
            }
        </style>
        <a href="${to}"><slot></slot></a>
    `
    }
}

customElements.define('router-link', RouterLink)

export default RouterLink