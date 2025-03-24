$(document).on('click', '.js-order-make-discounts', function () {
  $(this).toggleClass('is-active');
  $('.order-make__discounts').slideToggle();
  return false;
});
