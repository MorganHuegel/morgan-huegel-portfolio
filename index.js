/* global $  */
"use strict";

let equationRelay = {
  className: "equation-relay",
  counter: 0,
  sources: [
    "./images/equation-relay/er-screenshot-teacher-join.png",
    "./images/equation-relay/er-screenshot-join-page.png",
    "./images/equation-relay/er-screenshot-player-gameplay.png",
    "./images/equation-relay/er-screenshot-guessing.png",
    "./images/equation-relay/er-screenshot-final-results.png",
    "./images/equation-relay/er-screenshot-teacher-dashboard.png",
    "./images/equation-relay/er-screenshot-create-questions.png",
    "./images/equation-relay/er-screenshot-validations.png",
  ],
};

let owenWilsnake = {
  className: "owen-wilsnake",
  counter: 0,
  sources: [
    "./images/owen-wilsnake/owen-wilsnake-mobile-gameplay.png",
    "./images/owen-wilsnake/owen-wilsnake-mobile-crash.png",
    "./images/owen-wilsnake/owen-wilsnake-mobile-high-scores.png",
    "./images/owen-wilsnake/owen-wilsnake-mobile-login.png",
    "./images/owen-wilsnake/owen-wilsnake-mobile-landing.png",
    "./images/owen-wilsnake/owen-wilsnake-mobile-app-icon.png",
  ],
};

let goodtimes = {
  className: "goodtimes",
  counter: 0,
  sources: [
    "./images/goodtimes/goodtimes-screenshot-main.png",
    "./images/goodtimes/goodtimes-screenshot-title.png",
    "./images/goodtimes/goodtimes-screenshot-dashboard.png",
    "./images/goodtimes/goodtimes-screenshot-restaurants.png",
    "./images/goodtimes/goodtimes-screenshot-activities.png",
    "./images/goodtimes/goodtimes-screenshot-vote-form.png",
    "./images/goodtimes/goodtimes-mobile-1.png",
    "./images/goodtimes/goodtimes-mobile-2.png",
    "./images/goodtimes/goodtimes-mobile-3.png",
  ],
};

let wordSearch = {
  className: "word-search-generator",
  counter: 0,
  sources: [
    "./images/word-search/word-search-screenshot-main.png",
    "./images/word-search/word-search-screenshot-landing.png",
    "./images/word-search/word-search-screenshot-create.png",
    "./images/word-search/word-search-mobile-1.png",
    "./images/word-search/word-search-mobile-2.png",
    "./images/word-search/word-search-mobile-3.png",
  ],
};

let seatTalk = {
  className: "seat-talk",
  counter: 0,
  sources: [
    "./images/seat-talk/seat-talk-landing.png",
    "./images/seat-talk/seat-talk-empty-room.png",
    "./images/seat-talk/seat-talk-mobile-1.png",
  ],
};

function switchScreenshot(e, right) {
  const container = $(e.target.closest("div"));
  $(container).off();
  const image = $(e.target.closest("div")).find("img")[0];
  let app;
  switch (true) {
    case image.classList.contains("equation-relay"):
      app = equationRelay;
      break;
    case image.classList.contains("owen-wilsnake"):
      app = owenWilsnake;
      break;
    case image.classList.contains("goodtimes"):
      app = goodtimes;
      break;
    case image.classList.contains("word-search-generator"):
      app = wordSearch;
      break;
    case image.classList.contains("seat-talk"):
      app = seatTalk;
      break;
  }

  let spanList = $(image).parent().find(".screenshot-bubbles").children();
  $(spanList[app.counter]).removeClass("selected-bubble");

  if (right) app.counter = (app.counter + 1) % app.sources.length;
  else if (app.counter === 0) app.counter = app.sources.length - 1;
  else app.counter = app.counter - 1;

  $(spanList[app.counter]).addClass("selected-bubble");

  let newImage;
  $(image).fadeOut(200, () => {
    $(image).replaceWith(
      `<img class='screenshot ${app.className}' src='${
        app.sources[app.counter]
      }' alt='screen shot of ${app.className} App' style='display:none'/>`
    );
    newImage = $(container).find("img");
    if ($(newImage).attr("src").includes("mobile")) {
      $(newImage).addClass("mobile");
    } else {
      $(newImage).removeClass("mobile");
    }
    $(newImage).fadeIn(300, () => {
      $(container).on("click", ".arrow.right", (e) =>
        switchScreenshot(e, true)
      );
      $(container).on("click", ".arrow.left", (e) =>
        switchScreenshot(e, false)
      );
    });
  });
}

function eventListeners() {
  $(".screenshot-container").on("click", ".arrow.right", (e) =>
    switchScreenshot(e, true)
  );
  $(".screenshot-container").on("click", ".arrow.left", (e) =>
    switchScreenshot(e, false)
  );
}

function screenshotBubbles() {
  equationRelay.sources.forEach((source, index) => {
    const selected = index === 0 ? "selected-bubble" : "";
    $(".screenshot-bubbles.equation-relay").append(
      `<span class='bubble ${selected} ${index}'></span>`
    );
  });
  $(".screenshot-bubbles.equation-relay").css(
    "left",
    `calc(50% - (15px * ${equationRelay.sources.length}) / 2)`
  );

  owenWilsnake.sources.forEach((source, index) => {
    const selected = index === 0 ? "selected-bubble" : "";
    $(".screenshot-bubbles.owen-wilsnake").append(
      `<span class='bubble ${selected} ${index}'></span>`
    );
  });
  $(".screenshot-bubbles.owen-wilsnake").css(
    "left",
    `calc(50% - (15px * ${owenWilsnake.sources.length}) / 2)`
  );

  goodtimes.sources.forEach((source, index) => {
    const selected = index === 0 ? "selected-bubble" : "";
    $(".screenshot-bubbles.goodtimes").append(
      `<span class='bubble ${selected} ${index}'></span>`
    );
  });
  $(".screenshot-bubbles.goodtimes").css(
    "left",
    `calc(50% - (15px * ${goodtimes.sources.length}) / 2)`
  );

  wordSearch.sources.forEach((source, index) => {
    const selected = index === 0 ? "selected-bubble" : "";
    $(".screenshot-bubbles.word-search-generator").append(
      `<span class='bubble ${selected} ${index}'></span>`
    );
  });
  $(".screenshot-bubbles.word-search-generator").css(
    "left",
    `calc(50% - (15px * ${wordSearch.sources.length}) / 2)`
  );

  seatTalk.sources.forEach((source, index) => {
    const selected = index === 0 ? "selected-bubble" : "";
    $(".screenshot-bubbles.seat-talk").append(
      `<span class='bubble ${selected} ${index}'></span>`
    );
  });
  $(".screenshot-bubbles.seat-talk").css(
    "left",
    `calc(50% - (15px * ${seatTalk.sources.length}) / 2)`
  );
}

function greeting() {
  setTimeout(() => {
    const greeting = "hello world:)";
    let counter = 0;
    let spellGreeting = setInterval(() => {
      if (counter === greeting.length) clearInterval(spellGreeting);
      const newHtml =
        $(".greeting").html() + greeting.substring(counter, counter + 1);
      $(".greeting").html(newHtml);
      counter++;
    }, 150);
  }, 200);
  setTimeout(() => {
    $(".cursor").toggleClass("open");
  }, 0);
  setTimeout(() => {
    $(".cursor").toggleClass("open");
  }, 2500);
  setTimeout(() => {
    $("body").fadeOut(500, () => {
      $(".landing-page").hide();
      $(".banner, main, footer").show();
      $("body").fadeIn(300);
    });
  }, 3000);
}

$(() => {
  $("body").fadeIn(1000, () => greeting());
  eventListeners();
  screenshotBubbles();
});
