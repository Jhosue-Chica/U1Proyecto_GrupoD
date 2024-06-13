class FeatureElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const icon = this.getAttribute('icon');
        const title = this.getAttribute('title');
        const text = this.getAttribute('text');

        // Import the template from the main document
        const template = document.getElementById('feature-template').content.cloneNode(true);

        // Set the values of the feature's attributes
        template.querySelector('.icon i').className = icon;
        template.querySelector('h3').textContent = title;
        template.querySelector('p').textContent = text;

        // Append the cloned template to the shadow DOM
        this.shadowRoot.appendChild(template);
    }
}

customElements.define('feature-element', FeatureElement);

export default FeatureElement;
