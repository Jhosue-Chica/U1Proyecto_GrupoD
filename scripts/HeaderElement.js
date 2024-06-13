class HeaderElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['logo-src', 'phone', 'email', 'hours', 'links'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const logoSrc = this.getAttribute('logo-src') || '../img/1_copy.png';
        const phone = this.getAttribute('phone') || '+33 877 554 332';
        const email = this.getAttribute('email') || 'info@website.com';
        const hours = this.getAttribute('hours') || 'Lun - Vie: 9:00 - 18:30';
        const links = JSON.parse(this.getAttribute('links') || '[]');

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <style>
                header {
                    background-color: #f8f9fa;
                    font-family: Arial, Helvetica, sans-serif;
                    padding: 20px 0;
                }

                .contact-info {
                    font-size: 0.9rem;
                    color: #4f5357;
                }

                .contact-info span {
                    display: inline-block;
                    margin-right: 20px;
                }

                .contact-info i {
                    margin-right: 8px;
                    color: #6fa243;
                }

                .logo img {
                    height: 100px;
                    width: auto;
                    margin-top: 20px;
                }

                .navbar {
                    margin-top: 15px;
                    padding: 0 20px;
                }

                .navbar-nav {
                    color: #0574d5;
                }

                .navbar-nav .nav-link {
                    color: #28a745;
                    font-size: 1rem;
                    font-weight: bolder;
                    margin-right: 20px;
                    transition: color 0.4s, background-color 0.4s;  
                    padding: 5px 10px;
                    border-radius: 5px;
                }

                .navbar-nav .nav-link:hover {
                    color: #155724;
                    background-color: #85d04486;
                }

                .donate-button {
                    background-color: #6fa243;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 1rem;
                    border-radius: 5px;
                    transition: background-color 0.3s;
                }

                .donate-button:hover {
                    background-color: #155724;
                }

                @keyframes slideInTop {
                    from {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes slideInLeft {
                    from {
                        transform: translateX(-50%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

        
                .contact-info {
                    animation: slideInTop 1s ease-out;
                }

                .logo {
                    animation: slideInLeft 1s ease-out;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .donate-button {
                    animation: fadeIn 2s ease-in;
                }

                /* Media Queries for Mobile */
                @media (max-width: 768px) {
                    .contact-info {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .contact-info span {
                        margin-right: 0;
                        margin-bottom: 10px;
                    }

                    .navbar-nav .nav-link {
                        margin-right: 0;
                        margin-bottom: 10px;
                        display: block;
                    }

                    .d-flex {
                        flex-direction: column;
                    }

                    .logo {
                        margin-bottom: 15px;
                    }

                    .donate-button {
                        width: 100%;
                        margin-top: 10px;
                    }
                }
            </style>
            <header class="bg-light py-3">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center flex-column flex-md-row">
                        <div class="logo">
                            <img src="${logoSrc}" alt="Logo" class="logo-img">
                        </div>
                        <div class="contact-info d-flex flex-column flex-md-row align-items-center">
                            <span class="mr-3"><i class="fas fa-phone-alt"></i> ${phone}</span>
                            <span class="mr-3 d-none d-md-block">|</span>
                            <span class="mr-3"><i class="fas fa-envelope"></i> ${email}</span>
                            <span class="mr-3 d-none d-md-block">|</span>
                            <span><i class="fas fa-clock"></i> ${hours}</span>
                        </div>
                        <div>
                            <button class="btn btn-success donate-button" aria-label="donar ahora">Donar Ahora</button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center mt-3 mt-md-0">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ml-auto">
                                    ${links.map(link => `
                                        <li class="nav-item"><a class="nav-link" href="${link.href}" aria-label="${link.label}">${link.text}</a></li>
                                    `).join('')}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('header-element', HeaderElement);


export function createHeaderElement() {
    const headerElement = document.createElement('header-element');
    headerElement.setAttribute('logo-src', '../img/1_copy.png');
    headerElement.setAttribute('phone', '+33 877 554 332');
    headerElement.setAttribute('email', 'info@website.com');
    headerElement.setAttribute('hours', 'Lun - Vie: 9:00 - 18:30');
    headerElement.setAttribute('links', JSON.stringify([
        { "href": "index.html", "text": "Inicio", "label": "inicio" },
        { "href": "Nosotros.html", "text": "Sobre Nosotros", "label": "sobre nosotros" },
        { "href": "#", "text": "Páginas", "label": "páginas" },
        { "href": "#", "text": "Campaña", "label": "campaña" },
        { "href": "#", "text": "Artículos", "label": "artículos" },
        { "href": "Contacto.html", "text": "Contacto", "label": "contacto" }
    ]));
    return headerElement;
}