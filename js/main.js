$(document).ready(function () {
  $('.nav__item').click(function (event) {
    if ($('.block').hasClass('one')) {
      $(".nav__item").not($(this)).removeClass('active');
      $(".nav__item--text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});