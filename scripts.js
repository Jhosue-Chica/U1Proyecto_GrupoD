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
        //const title = this.getAttribute('title');
        const frase = this.getAttribute('frase');
      //  const customAttribute = this.getAttribute('custom-attribute');
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <div class="footer">
            <div class="row mt-4 p-4">
            <div class="col-md-5 col-12 logo-footer"><img src="img/2.png"></div>
            <div class="col-md-5 col-12 frase">${frase}</div>
            </div>
            <hr style="border-top: 2px solid #ffffff; width:70%; border-radius:2px;">
            <br>
            <slot></slot>
            </div>
        `;
    }
}

customElements.define('my-footer', MyFooter);