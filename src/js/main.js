//отслеживание скролла для шапки
var header = $('.header'),
    toTop = $('.js-to-top'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > $('.header').height() * 2) {
		header.addClass('is-scrolled');
	}

  if (scrolled == 0) {
		header.removeClass('is-scrolled');
	}

  if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('is-out');
	} else {
		header.removeClass('is-out');
	}

  if (scrolled > scrollPrev) {
    $('.detail__info-inner').removeClass('is-scrolled');
    $('.left-menu').removeClass('is-scrolled');
    $('.catalog__filter-block-inner').removeClass('is-scrolled');
	} else {
    $('.detail__info-inner').addClass('is-scrolled');
    $('.left-menu').addClass('is-scrolled');
    $('.catalog__filter-block-inner').addClass('is-scrolled');
	}

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

  if($('.float-block .container span').width() > $('body').width()) {
    var el = $('.float-block .container span');
    var el_width = $('.float-block .container span').width() + 20;
    $('.float-block .container').css('--el_width', '-' + el_width + 'px');
    for (i = 0; i < 20; i++) {
      el.clone().appendTo(".float-block .container");
    };
    $('.float-block .container').addClass('marquee');
  }
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

//открытие мобильного меню
$(document).on('click', '.js-mobile-menu-opener', function () {
  $('body').addClass('is-overflow');
  $('.mobile-menu').fadeIn();
  return false;
});

//закрытие мобильного меню
$(document).on('click', '.js-mobile-menu-closer', function () {
  $('.mobile-menu').fadeOut(function () {
    $('body').removeClass('is-overflow');
    $('.mobile-menu__bottom').removeClass('is-overflow');
    $('.m-menu__section').removeClass('is-overflow').removeClass('is-open');
  });
  return false;
});

//открытие вложенного меню
$(document).on('click', '.js-lvl-opener', function () {
  $('.mobile-menu__bottom').addClass('is-overflow');
  $(this).closest('.root').scrollTop(0);
  $(this).closest('.root').addClass('is-overflow');
  $(this).next('.m-menu__section').addClass('is-open');
  return false;
});

$(document).on('click', '.js-lvl-closer', function () {
  var _this = $(this);
  _this.closest('.m-menu__section').removeClass('is-open');
  _this.closest('.root').removeClass('is-overflow');
  if(_this.closest('.root').hasClass('lvl_2')){
    $('.mobile-menu__bottom').removeClass('is-overflow');
  }
  return false;
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

//тогглер десктопного меню в шапке
$(document).on('click', '.js-header-catalog-toggler', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')) {
    _this.addClass('is-active');
    _this.find('use').attr('xlink:href', 'images/sprite.svg#close_icon');
    $('.header').addClass('is-open');
    $('body').addClass('is-overflow');
    $('.header__catalog').slideDown();
  } else {
    $('.header__catalog').slideUp(function () {
      _this.removeClass('is-active');
      _this.find('use').attr('xlink:href', 'images/sprite.svg#catalog_icon');
      $('body').removeClass('is-overflow');
      $('.header').removeClass('is-open');
    });
  }
  return false;
});

//тогглер комбобокса
$(document).on('click', '.js-combobox-toggler', function () {
  var combobox = $(this).closest('.combobox');

  if(combobox.hasClass('is-open')) {
    combobox.removeClass('is-open')
  } else {
    $('.combobox').removeClass('is-open');
    combobox.addClass('is-open')
  }
  return false;
});

//выбор варианта в комбобоксе
$(document).on('click', '.combobox__link', function () {
  $(this).closest('.combobox').find('.combobox__link').removeClass('is-active');
  $(this).addClass('is-active');
  $(this).closest('.combobox').find('.combobox__value').text($(this).text()).addClass('is-active');
  $(this).closest('.combobox').removeClass('is-open');
  return false;
});

//информационный попап
$(document).on('click', '.js-info-popup-opener', function () {
  var _this = $(this);
  $('html').addClass('is-overflow');
  $('body').addClass('is-overflow');
  $('#' + _this.attr('data-popup')).fadeIn(function () {
    $('#' + _this.attr('data-popup')).find('.info-popup__popup').addClass('is-open');
  });

  return false;
});

$(document).on('click', '.js-info-popup-closer', function () {
  $(this).closest('.info-popup').find('.info-popup__popup').removeClass('is-open');
  $(this).closest('.info-popup').fadeOut(function () {
    $('html').removeClass('is-overflow');
    $('body').removeClass('is-overflow');
  });

  return false;
});
