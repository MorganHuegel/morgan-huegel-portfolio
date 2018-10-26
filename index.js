/* global $  */
'use strict';

let goodtimes = {
  className: 'goodtimes',
  counter: 0,
  sources: [
    './images/goodtimes/goodtimes-screenshot-main.png',
    './images/goodtimes/goodtimes-screenshot-title.png',
    './images/goodtimes/goodtimes-screenshot-dashboard.png',
    './images/goodtimes/goodtimes-screenshot-restaurants.png',
    './images/goodtimes/goodtimes-screenshot-activities.png',
    './images/goodtimes/goodtimes-screenshot-vote-form.png',
    './images/goodtimes/goodtimes-mobile-1.png',
    './images/goodtimes/goodtimes-mobile-2.png',
    './images/goodtimes/goodtimes-mobile-3.png'
  ]
};

let atlas = {
  className: 'atlas',
  counter: 0,
  sources: [
    './images/atlas/atlas-screenshot-main.png',
    './images/atlas/atlas-screenshot-landing-page.png',
    './images/atlas/atlas-screenshot-dashboard.png',
    './images/atlas/atlas-screenshot-correct.png',
    './images/atlas/atlas-mobile-1.png',
    './images/atlas/atlas-mobile-2.png',
    './images/atlas/atlas-mobile-3.png'
  ]
};

let wordSearch = {
  className: 'word-search-generator',
  counter: 0,
  sources: [
    './images/word-search/word-search-screenshot-main.png',
    './images/word-search/word-search-screenshot-landing.png',
    './images/word-search/word-search-screenshot-create.png',
    './images/word-search/word-search-mobile-1.png',
    './images/word-search/word-search-mobile-2.png',
    './images/word-search/word-search-mobile-3.png'
  ]
};

let enduranceData = {
  className: 'endurancedata',
  counter: 0,
  sources: [
    './images/endurance-data/endurance-data-screenshot-main.png',
    './images/endurance-data/endurance-data-screenshot-view.png',
    './images/endurance-data/endurance-data-screenshot-adding-workout.png',
    './images/endurance-data/endurance-data-screenshot-profile.png',
    './images/endurance-data/endurance-data-mobile-1.png',
    './images/endurance-data/endurance-data-mobile-2.png',
    './images/endurance-data/endurance-data-mobile-3.png'
  ]
};



function switchScreenshot(e, right) {
  const container = $(e.target.closest('div'));
  $(container).off();
  const image = $(e.target.closest('div')).find('img')[0];
  let app;
  switch (true) {
    case image.classList.contains('goodtimes'):
      app = goodtimes;
      break;
    case image.classList.contains('atlas'):
      app = atlas;
      break;
    case image.classList.contains('word-search-generator'):
      app = wordSearch;
      break;
    case image.classList.contains('endurancedata'):
      app = enduranceData;
      break;
  }

  let spanList = $(image).parent().find('.screenshot-bubbles').children();
  $(spanList[app.counter]).removeClass('selected-bubble');

  if (right) app.counter = (app.counter + 1) % app.sources.length;
  else if (app.counter === 0) app.counter = app.sources.length - 1;
  else app.counter = app.counter - 1;

  $(spanList[app.counter]).addClass('selected-bubble');

  let newImage;
  $(image).fadeOut(200, () => {
    $(image).replaceWith(`<img class='screenshot ${app.className}' src='${app.sources[app.counter]}' alt='screen shot of ${app.className} App' style='display:none'/>`);
    newImage = $(container).find('img');
    if ($(newImage).attr('src').includes('mobile')) {
      $(newImage).addClass('mobile');
    } else {
      $(newImage).removeClass('mobile');
    }
    $(newImage).fadeIn(300, () => {
      $(container).on('click', '.arrow.right', e => switchScreenshot(e, true));
      $(container).on('click', '.arrow.left', e => switchScreenshot(e, false));
    });
  });
}




function eventListeners(){
  $('.screenshot-container').on('click', '.arrow.right', (e) => switchScreenshot(e, true));
  $('.screenshot-container').on('click', '.arrow.left', (e) => switchScreenshot(e, false));
  // $('.screenshot-container').on('mouseenter', e => {
  //   console.log(e.target);
  // });
  // $('.screenshot-container').on('mouseleave', e => {
  //   console.log(e.target);
  // });
}



function screenshotBubbles() {
  goodtimes.sources.forEach( (source, index) => {
    const selected = index === 0 ? 'selected-bubble' : '';
    $('.screenshot-bubbles.goodtimes').append(`<span class='bubble ${selected} ${index}'></span>`);
  });
  $('.screenshot-bubbles.goodtimes').css('left', `calc(50% - (15px * ${goodtimes.sources.length}) / 2)`);

  atlas.sources.forEach( (source, index) => {
    const selected = index === 0 ? 'selected-bubble' : '';
    $('.screenshot-bubbles.atlas').append(`<span class='bubble ${selected} ${index}'></span>`);
  });
  $('.screenshot-bubbles.atlas').css('left', `calc(50% - (15px * ${atlas.sources.length}) / 2)`);

  wordSearch.sources.forEach( (source, index) => {
    const selected = index === 0 ? 'selected-bubble' : '';
    $('.screenshot-bubbles.word-search-generator').append(`<span class='bubble ${selected} ${index}'></span>`);
  });
  $('.screenshot-bubbles.word-search-generator').css('left', `calc(50% - (15px * ${wordSearch.sources.length}) / 2)`);

  enduranceData.sources.forEach( (source, index) => {
    const selected = index === 0 ? 'selected-bubble' : '';
    $('.screenshot-bubbles.endurancedata').append(`<span class='bubble ${selected} ${index}'></span>`);
  });
  $('.screenshot-bubbles.endurancedata').css('left', `calc(50% - (15px * ${enduranceData.sources.length}) / 2)`);
}


function greeting(){
  setTimeout(() => {
    const greeting = 'hello world:)';
    let counter = 0;
    let spellGreeting = setInterval(() => {
      if (counter === greeting.length) clearInterval(spellGreeting);
      const newHtml = $('.greeting').html() + greeting.substring(counter, counter + 1);
      $('.greeting').html(newHtml);
      counter++;
    }, 200);
  }, 1000);
  setTimeout(() => {
    $('.cursor').toggleClass('open');
  }, 500);
  setTimeout(() => {
    $('.cursor').toggleClass('open');
  }, 4000);
  setTimeout(() => {
    $('.landing-page').slideUp();
  }, 5000);
}


$(() => {
  $('body').fadeIn(2000, () => greeting());
  eventListeners();
  screenshotBubbles();
});