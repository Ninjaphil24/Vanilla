import RouterClass from "./RouterClass.js";
class RouterView extends RouterClass {
    constructor() {
        super();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <div id="container"></div>
    `
    }
}

customElements.define('router-view', RouterView)

export default RouterView