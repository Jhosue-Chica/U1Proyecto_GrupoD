class MyFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        //const title = this.getAttribute('title');
        const frase = this.getAttribute('frase');
        //  const customAttribute = this.getAttribute('custom-attribute');
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/styles/footer.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
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
                         <li>Item 3</li>
                    </ul>
                </div>
                <div class="col-md-4 col-12 col-lg-4 text-center">
            <ul style="list-style-type: none;">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            </ul>
            </div>
            <div class="col-md-4 col-12 col-lg-4 text-center">
            <ul style="list-style-type: none;">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
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