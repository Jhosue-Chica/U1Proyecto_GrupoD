import { template } from './ContactoEsModulesExp.js';

class CardComponent extends HTMLElement {
    constructor() {
        super();


        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));


        this.iconElement = this.shadowRoot.getElementById('icon');
        this.titleElement = this.shadowRoot.getElementById('title');
        this.description1Element = this.shadowRoot.getElementById('description1');
        this.description2Element = this.shadowRoot.getElementById('description2');
    }


    connectedCallback() {
        this.icon = this.getAttribute('icon');
        this.title = this.getAttribute('title');
        this.description1 = this.getAttribute('description1');
        this.description2 = this.getAttribute('description2');
    }

    static get observedAttributes() {
        return ['icon', 'title', 'description1', 'description2'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'icon':
                this.iconElement.src = newValue;
                break;
            case 'title':
                this.titleElement.textContent = newValue;
                break;
            case 'description1':
                this.description1Element.textContent = newValue;
                break;
            case 'description2':
                this.description2Element.textContent = newValue;
                break;
        }
    }
}

customElements.define('card-component', CardComponent);
