/* global $  */
'use strict';

let goodtimes = {
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


function eventListeners(){
  $('.screenshot-container').on('click', '.arrow', (e) => {
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

    if (e.target.closest('span').classList.contains('right')) app.counter = (app.counter + 1) % app.sources.length;
    else if (app.counter === 0) app.counter = app.sources.length - 1;
    else app.counter = app.counter - 1;
    $(image).fadeOut(100, () => {
      $(image).attr('src', app.sources[app.counter]);
    });
    $(image).fadeIn(100);

    if ($(image).attr('src').includes('mobile')) {
      $(image).addClass('mobile');
    } else {
      $(image).removeClass('mobile');
    }
  });
}

$(eventListeners());
