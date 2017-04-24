$(document).ready(function(){
  function checkSize(){
    var bigger = $('#bigger').height();
    var smaller = $('#smaller').height();
    if (smaller != bigger){
    $('#smaller').css('min-height', bigger);
    };
    console.log('left and right equal size!');
  };
  checkSize();

  $(window).resize(function(){
    checkSize();
  });

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.hero-text').css({
            'transform': 'translateX(' + wScroll / 3 + '%)'
        });
    if (wScroll > 150){

      $('.hero-text').addClass('shade');
    } else {

      $('.hero-text').removeClass('shade');
    }
    if (wScroll > 225) {
      $('footer').removeClass('hidden');
      $('.text-center > img').each(function(i){
        setTimeout(function(){
          $('.text-center > img').eq(i).css('opacity', '1');
        }, 250*(i+1));
      });
    } else {
      $('footer').addClass('hidden');
    }
    if (wScroll > $('.cta').offset().top) {
      setTimeout(function(){
        $('.about-us > .row > .col-sm-7').css('opacity', '1');
      }, 300);
    }
    if (wScroll > $('#cali-bear').offset().top) {
      $('#samples > .col-sm-4 > a > img').each(function(i){
        setTimeout(function(){
          $('#samples > .col-sm-4 > a > img').eq(i).css('opacity', '1');
        }, 350*(i+2));
      });
    }
  });
});
