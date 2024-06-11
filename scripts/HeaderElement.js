class HeaderElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
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
                    font-size: 1rem;
                    color: #6c757d;
                }

                .contact-info span {
                    display: inline-block;
                    margin-right: 20px;
                }

                .contact-info i {
                    margin-right: 8px;
                    color: #28a745;
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
                    margin-right: 20px;
                    transition: color 0.4s, background-color 0.4s;  
                    padding: 5px 10px;
                    border-radius: 5px;
                }

                .navbar-nav .nav-link:hover {
                    color: #155724;
                    background-color: #d4edda;
                }

                .donate-button {
                    background-color: #28a745;
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

                /* Mobile adjustments */
                @media (max-width: 768px) {
                    .contact-info {
                        flex-direction: column;
                        text-align: center;
                    }

                    .contact-info span {
                        margin-bottom: 10px;
                        margin-right: 0;
                    }

                    .logo {
                        text-align: center;
                        margin-top: 10px;
                    }

                    .navbar-nav {
                        text-align: center;
                    }

                    .navbar-nav .nav-link {
                        margin-right: 0;
                        margin-bottom: 10px;
                    }
                }

                /* Animations */

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

                .logo,
                .contact-info {
                    animation: slideInTop 1s ease-out;
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


            </style>
            <header class="bg-light py-3">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="logo">
                            <img src="../img/1_copy.png" alt="ECO ESPE Logo" class="logo-img">
                        </div>
                        <div class="contact-info d-flex">
                            <span class="mr-3"><i class="fas fa-phone-alt"></i> +33 877 554 332</span>
                            <span class="mr-3"><i class="fas fa-envelope"></i> info@website.com</span>
                            <span><i class="fas fa-clock"></i> Lun - Vie: 9:00 - 18:30</span>
                        </div>
                        <div>
                            <button class="btn btn-success donate-button" aria-label="donar ahora">Donar Ahora</button>
                        </div>
                        
                    </div>
                    <div class="d-flex justify-content-center align-items-center">

                    <nav class="navbar navbar-expand-lg navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item"><a class="nav-link" href="index.html" aria-label="inicio">Inicio</a></li>
                                <li class="nav-item"><a class="nav-link" href="Nosotros.html" aria-label="sobre nosotros">Sobre Nosotros</a></li>
                                <li class="nav-item"><a class="nav-link" href="#" aria-label="páginas">Páginas</a></li>
                                <li class="nav-item"><a class="nav-link" href="#" aria-label="campaña">Campaña</a></li>
                                <li class="nav-item"><a class="nav-link" href="#" aria-label="artículos">Artículos</a></li>
                                <li class="nav-item"><a class="nav-link" href="Contacto.html" aria-label="contacto">Contacto</a></li>
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


export default HeaderElement;