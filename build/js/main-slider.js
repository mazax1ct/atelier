$(document).ready(function() {
  var mainSlider = new Swiper(".js-main-slider", {
    navigation: {
      nextEl: '.js-main-slider-next',
      prevEl: '.js-main-slider-prev'
    },
    initialSlide: 1
  });

  var secondarySlider = new Swiper(".js-secondary-slider", {
    slidesPerView: 3,
    initialSlide: 1,
    centeredSlides: true
  });

  mainSlider.on('slideChange', function () {
    secondarySlider.slideTo(mainSlider.activeIndex)
  });
});
