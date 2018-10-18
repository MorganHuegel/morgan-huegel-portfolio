/* global $  */
'use strict';


function eventListeners(){
  //Expand more-about-morgan info
  $('.about-me, .unicycle-pic-width').on('click', '#more-about-morgan, .unicycle-pic-width.short', function(){
    $('.unicycle-pic-height').css('height', '555px');
    $('.unicycle-pic-width').addClass('tall').removeClass('short');
    $('#more-about-morgan').hide();
    $('label[for=more-about-morgan]').hide();
    $('.life-story').slideDown();
  });

  //collapse more-about-moregan info
  $('.about-me').on('click', '#less-about-morgan, .unicycle-pic-width.tall', function(){
    $('.life-story').slideUp(400);
    $('.unicycle-pic-height').css('height', '205px');
    $('.unicycle-pic-width').addClass('short').removeClass('tall');
    $('#more-about-morgan').show();
    $('label[for=more-about-morgan]').show();

  });
}

$(eventListeners());
