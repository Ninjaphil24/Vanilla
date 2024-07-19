class HelloWorld extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        const msg = this.getAttribute('msg') || 'Add msg'
        const template = document.createElement('template')
        template.innerHTML = `
        <style>
            #hw {
                font-size: 40px;
                color: blue;
                padding: 0 10px;
            }
        </style>
        <div id="hw">${msg}</div>
        
    `

        let clone = template.content.cloneNode(true)
        this.appendChild(clone)
    }
}

customElements.define('hello-world', HelloWorld)

export default HelloWorld