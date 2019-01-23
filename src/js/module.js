$(document).ready(function () {
  if ($('#gl_devel').length) {
    var devel = $('#gl_devel').html();
    $('#gl_devel').append('<div class="mask_devel">' + devel + '</div>');
  }
  $('.slider-front .slider-for').slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    arrows: true,  
    asNavFor: '.slider-front .slider-nav'
  });
  $('.slider-front .slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-front .slider-for',
    focusOnSelect: true,
    arrows: false,
    variableWidth: true,
  });
  $('.hot-goods .product-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  });
  $('.new-goods .product-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  });
  $('.similar-wrapper .product-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  });
  $('.popular-wrapper .product-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  });
  $('.suggestions-wrapper .product-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  });

  $('.product-slider .slider-for').slick({
    infinite: true,
    fade: true,
    arrows: true,  
    asNavFor: '.product-slider .slider-nav'
  });
  $('.product-slider .slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-slider .slider-for',
    arrows: false,
    vertical: true,
    focusOnSelect: true,
  });
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [750, 3000],
      slide: function( event, ui ) {
        $(".amount-min").val(ui.values[0]);
        $(".amount-max").val(ui.values[1]);
      }
    });
    $(".amount-min").val($("#slider-range").slider("values", 0));
    $(".amount-max").val($("#slider-range").slider("values", 1));
  });
  $('.tabs-wrapper .tabs-title .tab-title').click('click', function() {
    var id = $(this).attr('data-label');
    $('.tabs-wrapper .tabs-title .tab-title').removeClass('active');
    $(this).addClass('active');
    $('.tabs-wrapper .tabs-content .tab').removeClass('active');
    $('.tabs-wrapper .tabs-content .tab[data-label='+id+']').addClass('active');
  });
  $('.login-block .tabs-title li').click('click', function() {
    var id = $(this).attr('data-label');
    $('.login-block .tabs-title li').removeClass('active');
    $(this).addClass('active');
    $('.login-block .tabs-content .tab').removeClass('active');
    $('.login-block .tabs-content .tab[data-label='+id+']').addClass('active');
  });
});