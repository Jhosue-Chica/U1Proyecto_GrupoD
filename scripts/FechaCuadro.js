class FechaCuadro extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const date = new Date();
        const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        const dayName = days[date.getDay()];
        const dateString = date.toLocaleDateString('es-ES');

        this.shadowRoot.innerHTML = `
            <style>
                .fecha-cuadro {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: #ffffff;
                    border: 1px solid #ddd;
                    padding: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 14px;
                    color: #333;
                    z-index: 1000;
                }
            </style>
            <div class="fecha-cuadro">
                ${dayName}, ${dateString}
            </div>
        `;
    }
}

customElements.define('fecha-cuadro', FechaCuadro);

export default FechaCuadro;
