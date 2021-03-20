$(document).ready(function () {
  $('.nav__item').click(function (event) {
    if ($('.block').hasClass('one')) {
      $(".nav__item").not($(this)).removeClass('active');
      $(".nav__item--text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

$(document).ready(function () {
  $('.menu__burger').click(function (event) {
    $('.menu__burger, .menu__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
var scene = document.getElementById('parralax');
var parallaxInstance = new Parallax(parralax);