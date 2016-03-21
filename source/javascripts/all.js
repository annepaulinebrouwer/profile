//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(window).on('scroll', function (e){
  var scrollTop = $(window).scrollTop();

  if(scrollTop > $('.banner').height()){
      $('.navbar').addClass('has-background');
  } else {
    $('.navbar').removeClass('has-background');
  }
})
