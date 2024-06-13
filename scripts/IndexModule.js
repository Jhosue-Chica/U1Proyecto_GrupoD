// import Footer
import './Footer.js';
// import Header
import { createHeaderElement } from './HeaderElement.js';
// import Carousel
import './Carousel.js';
// import features
import './feature-element.js';
// import FechaCuadro
import './FechaCuadro.js';
// import ImageContainer
import './ImageContainer.js';


document.addEventListener('DOMContentLoaded', () => {
    const headerElement = createHeaderElement();
    document.body.prepend(headerElement);
});

document.addEventListener('DOMContentLoaded', () => {
    const fechaCuadro = document.createElement('fecha-cuadro');
    document.body.appendChild(fechaCuadro);
});
