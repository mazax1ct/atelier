//переключение картинок на мобиле
$(document).on('click', '.js-detail-thumb-mobile', function () {
  $('.detail__thumb').removeClass('is-active');
  $(this).closest('.detail__thumb').addClass('is-active');

  $('.js-main-image').attr('src', $(this).attr('data-src'));
  $('.js-main-image').attr('srcset', $(this).attr('data-retina'));
  return false;
});

//тогглер раздела информации
$(document).on('click', '.detail__accordion-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).closest('.detail__accordion').find('.detail__accordion-dropdown').slideToggle();
  return false;
});
