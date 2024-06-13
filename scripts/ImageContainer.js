class ImageContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['img-src', 'img-alt', 'text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector('.container').addEventListener('mouseover', () => this.checkPosition());
    }

    checkPosition() {
        const container = this.shadowRoot.querySelector('.container');
        const text = this.shadowRoot.querySelector('.text');
        const rect = container.getBoundingClientRect();
        const isOutOfView = (rect.right + text.offsetWidth) > window.innerWidth;

        if (isOutOfView) {
            text.style.left = 'auto';
            text.style.right = '100%';
            text.style.marginRight = '10px';
        } else {
            text.style.left = '100%';
            text.style.right = 'auto';
            text.style.marginLeft = '10px';
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    position: flex;
                    width: 20em;
                    transition: transform 0.3s ease-in-out;
                }
                img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .container:hover {
                    transform: scale(1.1);
                }
                .container:hover .text {
                    display: block;
                }
                .text {
                    display: none;
                    position: absolute;
                    top: 0;
                    width: 200px;
                    padding: 10px;
                    background-color: rgba(255, 255, 255, 0.9);
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: left;
                }
            </style>
            <div class="container">
                <img src="${this['img-src'] || ''}" alt="${this['img-alt'] || 'Image'}">
                <div class="text">${this['text'] || ''}</div>
            </div>
        `;
    }
}

window.customElements.define('image-container', ImageContainer);
