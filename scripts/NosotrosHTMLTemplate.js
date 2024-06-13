class ImageCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let shadowRoot = this.attachShadow({ mode: 'open' });
    const template = document.querySelector('#image-card-template');
    const instance = template.content.cloneNode(true);
    
    instance.querySelector('img').src = this.getAttribute('image');
    instance.querySelector('img').alt = this.getAttribute('title');
    instance.querySelector('h2').innerText = this.getAttribute('title');
    instance.querySelector('p').innerText = this.getAttribute('description');
    
    const socialLinks = instance.querySelectorAll('.social-icons a');
    socialLinks[0].href = this.getAttribute('facebook');
    socialLinks[1].href = this.getAttribute('twitter');
    socialLinks[2].href = this.getAttribute('instagram');
    
    shadowRoot.appendChild(instance);
  }
}

window.customElements.define('image-card', ImageCard);
