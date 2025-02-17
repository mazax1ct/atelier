$(document).ready(function() {
  var fSlider = new Swiper(".js-f-slider", {
    effect: "cards",
    cardsEffect: {
      slideShadows: false
    },
    navigation: {
      nextEl: '.js-f-slider-next',
      prevEl: '.js-f-slider-prev'
    }
  });

  var setSlider = new Swiper(".js-set-slider", {
    loop: false,
    spaceBetween: 10,
    simulateTouch: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });

  fSlider.on('slideChange', function () {
    setSlider.slideTo(fSlider.activeIndex)
  });
});
