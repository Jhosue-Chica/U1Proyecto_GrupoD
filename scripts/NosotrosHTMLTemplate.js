class ImageCard extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.mapComponentAttributes();
      this.render();
    }
  
    mapComponentAttributes() {
      const attributeMapping = ['image', 'title', 'description', 'facebook', 'twitter', 'instagram'];
      attributeMapping.forEach(key => {
        if (!this.hasAttribute(key)) {
          this.setAttribute(key, '');
        }
      });
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        ${this.templateCss()}
        ${this.template()}
      `;
    }
  
    template() {
      return `
        <div class="image-card">
          <div class="card">
            <div class="image-container">
              <img src="${this.getAttribute('image')}" alt="${this.getAttribute('title')}">
              <div class="overlay">
                <div class="social-icons">
                  ${this.getAttribute('facebook') ? `<a href="${this.getAttribute('facebook')}" target="_blank"><img src="/img/icon.png" alt="Facebook"></a>` : ''}
                  ${this.getAttribute('twitter') ? `<a href="${this.getAttribute('twitter')}" target="_blank"><img src="/img/icon1.png" alt="Twitter"></a>` : ''}
                  ${this.getAttribute('instagram') ? `<a href="${this.getAttribute('instagram')}" target="_blank"><img src="/img/icon2.png" alt="Instagram"></a>` : ''}
                </div>
              </div>
            </div>
            <h2>${this.getAttribute('title')}</h2>
            <p>${this.getAttribute('description')}</p>
          </div>
        </div>
      `;
    }
  
    templateCss() {
      return `
        <style>
          .image-card {
            display: inline-block;
            width: 300px; /* Ajustar el ancho según sea necesario */
            margin: 10px;
            text-align: center;
          }
          .card {
            position: relative;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            text-align: center;
            transition: box-shadow 0.3s ease;
            overflow: hidden;
          }
          .card:hover {
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          }
          .image-container {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .image-container:hover {
            transform: scale(1.05);
          }
          .image-container img {
            display: block;
            width: 100%;
            height: auto;
            transition: filter 0.3s ease;
          }
          .image-container:hover img {
            filter: brightness(0.7);
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .image-container:hover .overlay {
            opacity: 1;
          }
          .social-icons {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .image-container:hover .social-icons {
            opacity: 1;
          }
          .social-icons a {
            text-decoration: none;
            transition: transform 0.3s ease;
          }
          .social-icons a:hover {
            transform: scale(1.2);
          }
          .social-icons img {
            width: 70px; /* Ajustar el tamaño de los íconos según sea necesario */
            height: auto;
          }
          h2 {
            margin-top: 10px;
            font-size: 1.5rem;
            color: #294145;
          }
          p {
            font-size: 1rem;
            color: #333;
          }
        </style>
      `;
    }
  }
  
  window.customElements.define('image-card', ImageCard);
  