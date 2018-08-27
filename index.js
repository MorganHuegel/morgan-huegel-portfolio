/* global $  */
'use strict';

function eventListeners(){
  $('.about-me').on('click', '#more-about-morgan', function(){
    $('#more-about-morgan').hide();
    $('label[for=more-about-morgan]').hide();
    $('.life-story').slideDown();
  });
  $('.about-me').on('click', '#less-about-morgan', function(){
    $('.life-story').slideUp();
    $('#more-about-morgan').show();
    $('label[for=more-about-morgan]').show();
  });
}

$(eventListeners());