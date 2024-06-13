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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <style>
                .fecha-cuadro {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: #6fa243;
                    border: 1px solid #ddd;
                    padding: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 14px;
                    color: #ffffff;
                    border-radius: 10px;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
                    opacity: 0.8;
                }

                .fecha-cuadro:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    opacity: 1;
                }

                .fecha-cuadro i {
                    margin-right: 8px;
                }
            </style>
            <div class="fecha-cuadro">
                <i class="fas fa-calendar-alt"></i>
                <span>${dayName}, ${dateString}</span>
            </div>
        `;
    }
}

customElements.define('fecha-cuadro', FechaCuadro);

export default FechaCuadro;
