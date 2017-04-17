$(document).ready(function(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.hero-text').css({
            'transform': 'translateX(' + wScroll / 3 + '%)'
        });

    if (wScroll > 150){
      $('footer').removeClass('hidden');
      $('.hero-text').addClass('shade');
    } else {
      $('footer').addClass('hidden');
      $('.hero-text').removeClass('shade');
    }
  });
});
