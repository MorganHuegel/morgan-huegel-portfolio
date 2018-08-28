/* global $  */
'use strict';

// function handleAboutMeResize() {
//   $(window).resize(function(){
//     let screenWidth = $('body').width();
//     console.log(screenWidth);
//     if(screenWidth >= 600){
//       $('.about-me-text').css('padding', '60px 0 60px 0');
//     } else {
//       $('.about-me-text').css('padding', '10px 0 10px 0');
//     }
//     if (screenWidth >= 887 && screenWidth <= 970){
//       $('.about-me-text').css('display', 'inline-block');
//       $('.about-me-text').css('width', '65vw');
//     } else {
//       $('.about-me-text').css('display', 'initial');
//       $('.about-me-text').css('width', 'inherent');
//     }
//   });
// }

function eventListeners(){
  $('.about-me').on('click', '#more-about-morgan', function(){
    const screenWidth = $('body').width();
    if(screenWidth >= 600){
      $('.about-me-text').css('padding', '10px 0 60px 0');
    }
    if (screenWidth >= 887 && screenWidth <= 970){
      $('.about-me-text').css('display', 'inline-block');
      $('.about-me-text').css('width', '65vw');
    }
    $('#more-about-morgan').hide();
    $('label[for=more-about-morgan]').hide();
    $('.life-story').slideDown();
  });
  $('.about-me').on('click', '#less-about-morgan', function(){
    $('.life-story').slideUp(400, () => {
      const screenWidth = $('body').width();
      console.log(screenWidth);
      if(screenWidth >= 600){
        $('.about-me-text').css('padding', '60px 0');
      }
    });
    $('#more-about-morgan').show();
    $('label[for=more-about-morgan]').show();
  });
}

$(eventListeners());
//$(handleAboutMeResize());