$(document).ready(function () {
  $('.nav__item').click(function (event) {
    if ($('.block').hasClass('one')) {
      $(".nav__item").not($(this)).removeClass('active');
      $(".nav__item--text").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
var scene = document.getElementById('parralax');
<<<<<<< HEAD
var parallaxInstance = new Parallax(parralax);
=======
var parallaxInstance = new Parallax(parralax);
>>>>>>> 6303e655ccfd6e5711db60a2c6a2aabeefe13dc3
