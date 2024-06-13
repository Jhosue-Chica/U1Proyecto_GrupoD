import { productos } from '../productos/productosEsModule.js';

console.log(productos);

const productCardTemplate = document.getElementById('product-card-template').content;

class ProductCard extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'price', 'image', 'texto'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const cardClone = productCardTemplate.cloneNode(true);
        cardClone.querySelector('img').src = this.getAttribute('image');
        cardClone.querySelector('img').alt = this.getAttribute('name');
        cardClone.querySelector('.card-title').innerText = this.getAttribute('name');
        cardClone.querySelector('.card-text').innerText = this.getAttribute('price');
        cardClone.querySelector('.card-texto').innerText = this.getAttribute('texto');
        this.innerHTML = '';
        this.appendChild(cardClone);
    }
}
customElements.define('product-card', ProductCard);

const productList = document.getElementById('product-list');
productos.forEach(productos => {
    const productCard = document.createElement('product-card');
    productCard.setAttribute('name', productos.name);
    productCard.setAttribute('price', productos.price);
    productCard.setAttribute('image',`../productos/img_productos/${productos.image}`);
    productCard.setAttribute('texto', productos.texto);
    productList.appendChild(productCard);
});
