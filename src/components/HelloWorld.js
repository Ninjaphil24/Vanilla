class HelloWorld extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        const msg = this.getAttribute('msg') || 'Add msg'
        this.innerHTML = `
        <style>
            #hw {
                font-size: 40px;
                color: blue;
                padding: 0 10px;
            }
        </style>
        <template id="template-hw">
            <div id="hw">${msg}</div>
        </template>
    `
        const template = document.querySelector('#template-hw')
        let clone = template.content.cloneNode(true)
        this.appendChild(clone)
    }
}

customElements.define('hello-world', HelloWorld)

export default HelloWorld