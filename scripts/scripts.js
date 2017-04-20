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
    if (wScroll > 200) {
      $('.text-center > img').each(function(i){
        setTimeout(function(){
          $('.text-center > img').eq(i).css('opacity', '1');
        }, 250*(i+1));
      });
    }
  });
});
