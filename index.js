/* global $  */
'use strict';


function eventListeners(){
  //Expand more-about-morgan info
  $('.about-me').on('click', '#more-about-morgan', function(){
    const screenWidth = $('body').width();
    $('.unicycle-pic-height').css('height', '555px');
    $('#more-about-morgan').hide();
    $('label[for=more-about-morgan]').hide();
    $('.life-story').slideDown();
  });

  //collapse more-about-moregan info
  $('.about-me').on('click', '#less-about-morgan', function(){
    $('.life-story').slideUp(400, () => {
      const screenWidth = $('body').width();
    });
    $('.unicycle-pic').css('clip', 'rect(2vw, 38vw, 27vw, 14vw)');
    $('.unicycle-pic-height').css('height', '200px');
    $('#more-about-morgan').show();
    $('label[for=more-about-morgan]').show();
  });
}

$(eventListeners());
//$(handleAboutMeResize());