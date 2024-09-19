export class CardComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const outerBG = this.getAttribute('outer-bg')
        const innerBG = this.getAttribute('inner-bg')
        const slotColor = this.getAttribute('slot-color')
        const btnColor = this.getAttribute('btn-color')
        const btnFont = this.getAttribute('btn-Font')
        const btnText = this.getAttribute('button-text')
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="style.css">
        <div class="outer" style="background-color: ${outerBG}">
            <div class="inner" style="background-color: ${innerBG}">
                <slot class="slot" style="color: ${slotColor}"></slot>
                <button class="btn" style="background-color: ${btnColor}; color: ${btnFont}">${btnText}</button>
            </div>
        </div>
    `
        const btn = this.shadowRoot.querySelector('.btn')
        btn.addEventListener('click', () => alert(`Slot ${btnText}`))
    }





}

customElements.define("card-component", CardComponent);
