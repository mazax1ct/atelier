//отслеживание скролла для шапки
var header = $('.header'),
    toTop = $('.js-to-top'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > $('.header').height() * 0.5) {
		header.addClass('is-scrolled');
    toTop.addClass('is-active');
	} else {
		header.removeClass('is-scrolled');
    toTop.removeClass('is-active');
	}

  /*if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('is-out');
	} else {
		header.removeClass('is-out');
	}*/

	scrollPrev = scrolled;
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();

  //состояние заполненности поля ввода
  $('.js-input-group__input').each(function(index) {
    if($(this).val() !== '') {
      $(this).closest('.input-group').addClass('is-filled');
    } else {
      $(this).closest('.input-group').removeClass('is-filled');
    }
  });
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//состояние заполненности поля ввода
$(document).on('keyup', '.js-input-group__input', function () {
  if($(this).val() !== '') {
    $(this).closest('.input-group').addClass('is-filled');
  } else {
    $(this).closest('.input-group').removeClass('is-filled');
  }
});

//тогглер меню в футере
$(document).on('click', '.js-footer-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass('is-active');
    $(this).closest('.footer-menu').find('.footer-menu__list').slideDown();
  } else {
    $(this).removeClass('is-active');
    $(this).closest('.footer-menu').find('.footer-menu__list').slideUp();
  }
  return false;
});
