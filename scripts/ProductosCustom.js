class CustomButton extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const link = this.getAttribute('link');
      this.innerHTML = `
        <style>
          .btn-custom {
            margin: 10px;
          }
        </style>
        <button class="btn btn-secondary btn-custom">Comprar</button>
      `;
      this.querySelector('button').addEventListener('click', () => {
        window.open(link, '_blank');
      });
    }
  }

  customElements.define('custom-button', CustomButton);