$(document).ready(function(){
// Validator
$(function() {
  $('#contact-form').validator();
  $('#contact-form').on('submit', function(e) {
    if (!e.isDefaultPrevented()) {
      var url = "email.php";
      $.ajax({
          type: "POST",
          url: url,
          data: $(this).serialize(),
          success: function(data) {
              var messageAlert = 'alert-' + data.type;
              var messageText = data.message;

              var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
              if (messageAlert && messageText) {
                  $('#contact-form').find('.messages').html(alertBox);
                  $('#contact-form')[0].reset();
              }
          }
      });
      return false;
    }
  })
});

// Makes the height of the col equal to eachother
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

// scroll spy requires that the id on the section equal the href name
  $('body').scrollspy({
        target: '.navbar',
        offset: 110
    });
  $('[data-spy="scroll"]').each(function() {
      var $spy = $(this).scrollspy('refresh')
  });

  $('li a').on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top + -100}, 500, function() {
              window.location.hash = hash;
          });
      };
  });

  var $lastPosition = 0;
  $(window).scroll(function(){
    // disappearing nav
    if($(window).width() > 768) {
      $position = $(window).scrollTop();
      if ($position > $lastPosition) {
        $("nav").fadeOut();
      } else if ($lastPosition - $position > 5) {
        $("nav").fadeIn();
      }
      $lastPosition = $position;
    }

    // scrolling features
    var wScroll = $(this).scrollTop();
    $('.hero-text').css({
            'transform': 'translateX(' + wScroll / 3 + '%)'
        });
    if (wScroll > 150){
      $('.hero-text').addClass('shade');
    } else {
      $('.hero-text').removeClass('shade');
    }
    if (wScroll > $('.hero-text').offset().top+450) {
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
    if (wScroll > $('.about-us').offset().top) {
      $('#samples > .col-sm-4 > a > img').each(function(i){
        setTimeout(function(){
          $('#samples > .col-sm-4 > a > img').eq(i).css('opacity', '1');
        }, 350*(i+2));
      });
    }
    if (wScroll > $('.contact').offset().top) {
      $('#logo-bottom').css('opacity', '1');
    }
    var footerSize = $('footer').height();
    $('.contact').css('margin-bottom', footerSize-10);
  });
});
