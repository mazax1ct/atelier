$(document).ready(function() {
  $('.js-order-items').each(function(index, el) {
    //var slider = el.children[0];

    new Swiper(el, {
      loop: true,
      spaceBetween: 16,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },

        768: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4
        }
      },

      navigation: {
        nextEl: '.js-order-items-next[data-slider="'+el.dataset.slider+'"]',
        prevEl: '.js-order-items-prev[data-slider="'+el.dataset.slider+'"]',
      }
    });
  });
});
