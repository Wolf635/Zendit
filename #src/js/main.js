$(document).ready(function () {
  $('.header__link').click(function (event) {
    if ($('.block').hasClass('one')) {
      $(".header__link").not($(this)).removeClass('active');
      $(".header__link-text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
var scene = document.getElementById('parralax');
var parallaxInstance = new Parallax(parralax);