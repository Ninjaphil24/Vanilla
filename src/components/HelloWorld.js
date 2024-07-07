class HelloWorld extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.attachShadow({ mode: "open" })
    }

    static get observedAttributes() {
        return ['msg'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'msg') {
            this.render()
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const msg = this.getAttribute('msg') || '/'
        this.shadowRoot.innerHTML = `
        <style>
            div {
                font-size: 40px;
                color: blue;
                padding: 0 10px;
            }
        </style>
        <div>${msg}</div>
    `
    }
}

customElements.define('hello-world', HelloWorld)

export default HelloWorld