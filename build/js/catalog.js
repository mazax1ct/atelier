$(document).on('click', '.js-filter-opener', function () {
  $('.page').addClass('is-overflow');
  $('.catalog__filter').fadeIn(function () {
    $('.catalog__filter-inner').addClass('is-open');
  });
  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('.catalog__filter').fadeOut(function () {
    $('.catalog__filter-inner').removeClass('is-open');
    $('.page').removeClass('is-overflow');
  });
  return false;
});

$(document).on('click', '.js-filter-section-toggler', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')) {
    _this.addClass('is-active');
    _this.closest('.catalog__filter-section').find('.catalog__section-dropdown').slideDown();
  } else {
    _this.removeClass('is-active');
    _this.closest('.catalog__filter-section').find('.catalog__section-dropdown').slideUp();
  }
  return false;
});
