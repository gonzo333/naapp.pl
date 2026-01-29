import PhotoSwipeLightbox from
  'https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/photoswipe-lightbox.esm.min.js';

let lightbox;

window.initLightbox = function () {
    if (window._lightbox) {
        window._lightbox.destroy();
    }

    const lightbox = new PhotoSwipeLightbox({
        gallery: '#article-gallery-div',
        children: 'a',
        pswpModule: () =>
            import('https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/photoswipe.esm.min.js')
    });

    lightbox.init();
    window._lightbox = lightbox;
};
