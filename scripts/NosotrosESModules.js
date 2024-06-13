// import Footer
import './Footer.js';
// import Header
import { createHeaderElement } from './HeaderElement.js';


document.addEventListener('DOMContentLoaded', () => {
    const headerElement = createHeaderElement();
    document.body.prepend(headerElement);
});