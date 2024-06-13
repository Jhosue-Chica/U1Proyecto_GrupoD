// import Footer
import './Footer.js';
// import Header
import { createHeaderElement } from './HeaderElement.js';
// import Carousel
import './Carousel.js';
// import features
import './feature-element.js';


document.addEventListener('DOMContentLoaded', () => {
    const headerElement = createHeaderElement();
    document.body.prepend(headerElement);
});