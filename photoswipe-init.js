 import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe-lightbox.esm.min.js';
    import PhotoSwipe from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.2/photoswipe.esm.min.js';

    window.iniciarGaleria = function(selectorID) {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#' + selectorID,
            children: 'a.pswp-link',
            pswpModule: PhotoSwipe,
            bgOpacity: 0.9,
            padding: { top: 30, bottom: 30, left: 10, right: 10 }
        });

        // PLUGIN DE TÍTULOS (CAPTION)
        // Lee el atributo 'alt' de la imagen y lo muestra abajo
        lightbox.on('uiRegister', function() {
            lightbox.pswp.ui.registerElement({
                name: 'custom-caption',
                order: 9,
                isButton: false,
                appendTo: 'root',
                onInit: (el, pswp) => {
                    lightbox.pswp.on('change', () => {
                        const currSlideElement = lightbox.pswp.currSlide.data.element;
                        let captionText = '';
                        if (currSlideElement) {
                            const img = currSlideElement.querySelector('img');
                            captionText = img ? img.getAttribute('alt') : '';
                        }
                        el.innerHTML = captionText ? `<div class="pswp-caption-content">${captionText}</div>` : '';
                    });
                }
            });
        });

        lightbox.init();
    };

    window.dispatchEvent(new Event('PhotoSwipeReady'));