$(document).on('click', '.js-filter-opener', function () {
  $('.page').addClass('is-overflow');
  $('.filter').fadeIn(300, function () {
    $('.filter__inner').addClass('is-open');
    setTimeout(function() {
      $('.filter__closer').addClass('is-active');
    }, 300);
  });
  return false;
});

$(document).on('click', '.js-filter-closer', function () {
  $('.filter__inner').removeClass('is-open');
  $('.filter__closer').removeClass('is-active');
  $('.filter').fadeOut(300, function () {
    $('.page').removeClass('is-overflow');
  });
  return false;
});

$(document).on('click', '.js-filter-section-toggler', function () {
  var _this = $(this);
  if(!_this.hasClass('is-active')) {
    _this.addClass('is-active');
    _this.closest('.filter__section').find('.filter__section-dropdown').slideDown();
  } else {
    _this.removeClass('is-active');
    _this.closest('.filter__section').find('.filter__section-dropdown').slideUp();
  }
  return false;
});

//открытие/закрытие ката в секции фильтра
$(document).on('click', '.js-filter-section-cut', function () {
  var oldText = $(this).text();
  $(this).text($(this).attr('data-text'));
  $(this).attr('data-text', oldText);
  $(this).prev('.filter__section-cut').slideToggle();
  return false;
});

$(document).ready(function() {
  //слайдер цены
  if ($('.js-price-slider').length) {
    var min = 25000;
    var max = 75000;
    $(".js-price-slider").ionRangeSlider({
      skin: "round",
      type: "double",
      min: min,
      max: max,
      from: min,
      to: max,
      grid: false,
      hide_min_max: true,
      hide_from_to: true,
      onChange: function (data) {
        $('#min').val(data.from);
        $('#max').val(data.to);
      }
    });

    var price_range = $(".js-price-slider").data("ionRangeSlider");

    $('#min, #max').on('change', function() {
      price_range.update({
        from: $('#min').val(),
          to: $('#max').val()
      });

      if($('#min').val() < min ) {
        price_range.update({
          from: $('#min').val(min)
        });
      }

      if($('#max').val() < min ) {
        price_range.update({
          from: $('#max').val(min)
        });
      }

      if($('#max').val() > max ) {
        price_range.update({
          from: $('#max').val(max)
        });
      }
    });
  }
});
