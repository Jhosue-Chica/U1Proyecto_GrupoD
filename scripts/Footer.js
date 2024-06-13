class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const frase = this.getAttribute('frase');
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/styles/footer.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <div class="footer">
                <div class="row mt-4">
                    <div class="col-md-4 col-12 logo-footer "><img src="../img/2_copia.png"></div>
                    <div class="col-md-6 col-12  mt-4 frase"><strong>${frase}</strong></div>
                    <hr style="border-top: 2px solid #ffffff; width:70%; border-radius:2px;">
                </div>
                <div class="row mt-4 relleno_footer">
                    <div class="col-md-4 col-12 col-lg-4 text-center redes_sociales">
                     <ul style="list-style-type: none;">
                        <li><strong>Redes Sociales</strong></li>
                        <li><img  src="/img/icon.png"><img  src="/img/icon1.png"><img  src="/img/icon2.png"></li>
                         
                    </ul>
                </div>
                <div class="col-md-4 col-12 col-lg-4 text-center">
                    <ul style="list-style-type: none;">
                        <li><strong>Contactos</strong></li>
                        <li><i class="fas fa-envelope"> </i> info@website.com</li>
                        <li><i class="fas fa-phone-alt"> </i> +33 877 554 332</li>
                    </ul>
            </div>
            <div class="col-md-4 col-12 col-lg-4 text-center">
            <ul style="list-style-type: none;">
            <li><strong>Servicios</strong></li>
            <li>Capacitación</li>
            <li>Cracion de abono especializado</li>
            <li>Asesoramiento</li>
            </ul>
            </div>
            </div>
            <br>
            <div class="row mt-4 text-center bg-ligth">
            <p> 2024 ECO ESPE. Todos los derechos reservados.</p>
            </div>
            </div>
        `;
    }
}

customElements.define('my-footer', MyFooter);

export default MyFooter;