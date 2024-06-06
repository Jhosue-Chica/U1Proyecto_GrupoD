let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 5000); // Cambia de diapositiva cada 5 segundos

document.addEventListener('DOMContentLoaded', () => {
    showNextSlide();
});

class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || 'Ecoviron';
        const attribute = this.getAttribute('attribute') || 'Default Attribute';
        const customAttribute = this.getAttribute('custom-attribute') || 'Custom Attribute';
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <div class= container>
            <div class="row mt-4 p-4">
            <div class="col-6"><h1>${title}</h1></div>
            <div class="col-6">${attribute}</div>
            </div>
            <br>
            <div>${customAttribute}</div>
            <slot></slot>
            </div>
        `;
    }
}

customElements.define('my-footer', MyFooter);