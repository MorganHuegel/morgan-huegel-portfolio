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
  $(e.target).closest('div').off();
  const images = $(e.target).closest('div').children('img');

  let app;
  switch (true) {
    case images[0].classList.contains('goodtimes'):
      app = goodtimes;
      break;
    case images[0].classList.contains('atlas'):
      app = atlas;
      break;
    case images[0].classList.contains('word-search-generator'):
      app = wordSearch;
      break;
    case images[0].classList.contains('endurancedata'):
      app = enduranceData;
      break;
  }
  
  

  let spanList = $(e.target).closest('.screenshot-container').find('.screenshot-bubbles').children();
  $(spanList[app.counter]).css('background-color', 'gray');
  $(images[app.counter]).fadeOut(200, () => {
    if (right) app.counter = (app.counter + 1) % app.sources.length;
    else if (app.counter === 0) app.counter = app.sources.length - 1;
    else app.counter = app.counter - 1;

    $(spanList[app.counter]).css('background-color', 'white');
    $(images[app.counter]).fadeIn(200, () => {
      $(e.target).closest('div').on('click', '.arrow.right', (e) => switchScreenshot(e, true));
      $(e.target).closest('div').on('click', '.arrow.left', (e) => switchScreenshot(e, false));
    });
  });
}




function eventListeners(){
  $('.screenshot-container').on('click', '.arrow.right', (e) => switchScreenshot(e, true));
  $('.screenshot-container').on('click', '.arrow.left', (e) => switchScreenshot(e, false));
}

function preloadImages() {
  let image = $('.screenshot.goodtimes');
  for (let i = goodtimes.sources.length - 1; i >= 0; i--) {
    const src = goodtimes.sources[i];
    if (src.includes('main')) continue;
    const classes = src.includes('mobile') ? 'screenshot goodtimes mobile' : 'screenshot goodtimes';
    $(image).after(`<img class='${classes}' src='${src}' alt='screenshot of ${goodtimes.className}' style='display:none'/>`);  }

  image = $('.screenshot.atlas');
  for (let i = atlas.sources.length - 1; i >= 0; i--) {
    const src = atlas.sources[i];
    if (src.includes('main')) continue;
    const classes = src.includes('mobile') ? 'screenshot atlas mobile' : 'screenshot atlas';
    $(image).after(`<img class='${classes}' src='${src}' alt='screenshot of ${atlas.className}' style='display:none'/>`);
  }

  image = $('.screenshot.word-search-generator');
  for (let i = wordSearch.sources.length - 1; i >= 0; i--) {
    const src = wordSearch.sources[i];
    if (src.includes('main')) continue;
    const classes = src.includes('mobile') ? 'screenshot word-search-generator mobile' : 'screenshot word-search-generator';
    $(image).after(`<img src='${src}' class='${classes}' alt='screenshot of ${wordSearch.className}' style='display:none'/>`);
  }

  image = $('.screenshot.endurancedata');
  for (let i = enduranceData.sources.length - 1; i >= 0; i--) {
    const src = enduranceData.sources[i];
    if (src.includes('main')) continue;
    const classes = src.includes('mobile') ? 'screenshot endurancedata mobile' : 'screenshot endurancedata';
    $(image).after(`<img src='${src}' class='${classes}' alt='screenshot of ${enduranceData.className}' style='display:none'/>`);
  }
}



function screenshotBubbles() {
  goodtimes.sources.forEach( (source, index) => {
    $('.screenshot-bubbles.goodtimes').append(`<span class='bubble ${index}'></span>`);
  });
  $('.screenshot-bubbles.goodtimes').css('left', `calc(50% - (15px * ${goodtimes.sources.length}) / 2)`);

  atlas.sources.forEach( (source, index) => {
    $('.screenshot-bubbles.atlas').append(`<span class='bubble ${index}'></span>`);
  });
  $('.screenshot-bubbles.atlas').css('left', `calc(50% - (15px * ${atlas.sources.length}) / 2)`);

  wordSearch.sources.forEach( (source, index) => {
    $('.screenshot-bubbles.word-search-generator').append(`<span class='bubble ${index}'></span>`);
  });
  $('.screenshot-bubbles.word-search-generator').css('left', `calc(50% - (15px * ${wordSearch.sources.length}) / 2)`);

  enduranceData.sources.forEach( (source, index) => {
    $('.screenshot-bubbles.endurancedata').append(`<span class='bubble ${index}'></span>`);
  });
  $('.screenshot-bubbles.endurancedata').css('left', `calc(50% - (15px * ${enduranceData.sources.length}) / 2)`);

}


$(() => {
  eventListeners();
  screenshotBubbles();
  preloadImages();
});
