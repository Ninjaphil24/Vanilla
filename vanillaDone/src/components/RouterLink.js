class RouterLink extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const template = document.createElement('template')
        template.innerHTML = `
        <style>
            a {
                text-decoration: none;
                color: inherit;
                padding: 0 10px;
            }
        </style>
           <a href="#/playground">Playground</a>
           <a href="#/">Home</a>
           <a href="#/about">About</a>
           <a href="#/reactive">Reactive</a>
           <a href="#/vbind">VBind</a>
        `
        let clone = template.content.cloneNode(true)
        this.appendChild(clone)
    }
}

customElements.define('router-link', RouterLink)

export default RouterLink