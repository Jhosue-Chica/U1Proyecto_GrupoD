class CarouselElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const slides = JSON.parse(this.getAttribute('slides'));

        const style = `
            <style>
                .swiper-container {
                    position: relative;
                    height: 100vh;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    overflow: hidden;
                }

                .swiper-slide {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }

                .swiper-slide::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1;
                }

                .banner-caption {
                    position: relative;
                    z-index: 2;
                    color: #fff;
                    max-width: 600px;
                    margin: auto;
                }

                .banner-sub-title {
                    margin: 0;
                    font-size: 24px;
                }

                .banner-title {
                    margin: 10px 0;
                    font-size: 36px;
                }

                .btn-one {
                    display: inline-block;
                    background-color: #000;
                    color: #fff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
            </style>
        `;

        const swiperSlides = slides.map(slide => `
            <div class="swiper-slide" style="background-image: url('${slide.background}');">
                <div class="banner-caption">
                    <h3 class="banner-sub-title">${slide.subtitle}</h3>
                    <h1 class="banner-title">${slide.title}</h1>
                    <p>${slide.text}</p>
                    <a href="#" class="btn-one">${slide.button}</a>
                </div>
            </div>
        `).join('');

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
            ${style}
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    ${swiperSlides}
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        `;

        setTimeout(() => {
            new Swiper(this.shadowRoot.querySelector('.swiper-container'), {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                effect: 'slide',
                speed: 1000,
                pagination: {
                    el: this.shadowRoot.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: this.shadowRoot.querySelector('.swiper-button-next'),
                    prevEl: this.shadowRoot.querySelector('.swiper-button-prev'),
                },
            });
        });
    }
}

customElements.define('carousel-element', CarouselElement);

export default CarouselElement;