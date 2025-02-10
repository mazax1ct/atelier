$(document).on('click', '.js-brands-alphabeth button', function () {
  let _this = $(this);
  let letter = _this.text();

  $('.brands-list__list li a').show();

  if(!_this.hasClass('is-active')) {
    $('.js-brands-alphabeth button').removeClass('is-active');
    _this.addClass('is-active');
    $('.brands-list__section').hide();
    $('.brands-list__section[data-letter="'+letter+'"]').show();
  } else {
    _this.removeClass('is-active');
    $('.brands-list__section').show();
  }

  return false;
});

jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

$(document).on('input', '.js-brands-search', function () {
  let query = $(this).val();
  $('.js-brands-alphabeth button').removeClass('is-active');
  $('.brands-list__section').show();
  $('.brands-list__list li a').hide();
  $('.brands-list__section').hide();
  $('.brands-list__list li a:Contains("'+query+'")').show();
  $('.brands-list__list li a:Contains("'+query+'")').closest('.brands-list__section').show();
  if($('.brands-list__list li a:Contains("'+query+'")').length === 0) {
    $('.no-brands').show();
  } else {
    $('.no-brands').hide();
  }
});
