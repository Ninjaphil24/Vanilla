class RouterLink extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            a {
                text-decoration: none;
                color: inherit;
                padding: 0 10px;
            }
        </style>
        <template id="template-rl">
           <a href="#/">Home</a>
           <a href="#/about">About</a>
        </template>
        `
        const template = document.querySelector('#template-rl')
        let clone = template.content.cloneNode(true)
        this.appendChild(clone)
    }
}

customElements.define('router-link', RouterLink)

export default RouterLink