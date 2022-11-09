// Our modules / classes
import ToggleResponsiveMenu from "./modules/ToggleResponsiveMenu"

ToggleResponsiveMenu()

import PhotoSwipeLightbox from './modules/PhotoSwipe/photoswipe-lightbox.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: () => import('./modules/PhotoSwipe/photoswipe.esm.min.js'),
});

lightbox.init();