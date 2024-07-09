class RouterClass extends HTMLElement {
    // Add parameter "attribute" to constructor and define this.attribute in constructor, to use observedAttributes & attributeChangedCallback
    constructor() {
        // Always call super first in constructor
        super();
        this.attachShadow({ mode: "open" })
    }

    // static get observedAttributes() {
    //     return [this.attribute];
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    //     if (name === this.attribute) {
    //         this.render()
    //     }
    // }

    connectedCallback() {
        this.render()
    }

    render() {
        throw new Error("A render() class is required.")
    }
}
export default RouterClass