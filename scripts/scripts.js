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
  // if ($('#smaller').height() != $('#bigger').height()){
  //   $('#smaller').css('min-height', $('#bigger').height());
  // };
  // $(window).resize(function(bigger, smaller){
  //   var bigger = $('#bigger').height();
  //   var smaller = $('#smaller').height();
  //   if (smaller != bigger){
  //   $('#smaller').css('min-height', bigger);
  //   };
  // });

  $(window).resize(function(){
    checkSize();
  });

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
    if (wScroll > 650) {
      console.log('vitory');
      setTimeout(function(){
        $('.about-us > .row > .col-sm-7').css('opacity', '1');
      }, 700);
    }
  });
});
