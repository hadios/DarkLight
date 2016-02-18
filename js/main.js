$(document).ready(function() {
  loadActions();
  hideAllPages();
  playMainPage();
});

var name = "";
var age = "21";
var FADE_OUT_DURATION = 600;
var FADE_IN_DURATION = 1000;

var inputTimeoutDuration = 5000;

function loadActions() {
  $(":input").on('input', function() {
    if (!formValidation()) {
      $("#nextButton").off();
      $("#nextButton").fadeTo(FADE_OUT_DURATION, 0);
      return false;
    }

    $("#nextButton").fadeTo(FADE_OUT_DURATION / 2, 1);
    $("#nextButton").off("click").click(function(e) {
      // Set name and age
      name = $("#nameInput").val().trim();
      age = $("#ageInput").val();

      // Update greeting
      var ageGreeting = "";
      if (age < 10) {
        ageGreeting = "A fresh blood enters this world.";
      } else if (age < 18) {
        ageGreeting = "An inexperienced one. Good good.";
      } else if (age < 26) {
        ageGreeting = "Time flies at this age.";
      } else if (age < 35) {
        ageGreeting = "Have a mid-life crisis yet? Hahahah...";
      } else if (age < 50) {
        ageGreeting = "Still working at this age?";
      } else if (age < 80) {
        ageGreeting = "Hope the young ones have a good teacher.";
      } else if (age < 100) {
        ageGreeting = "How does it feel to reach this far in life?";
      } else if (age < 666) {
        ageGreeting = "Now this is someone I do not get meet often.";
      } else {
        ageGreeting = "You have the Devil's age. Interesting...";
      }

      $("#greetingMessage").text("Welcome, " + name + ". " + ageGreeting);

      $("#main-page").fadeOut(FADE_OUT_DURATION);
      playGreetingPage();
    });
  });

  $("#greetingButton").click(function(e) {
    $("#greeting").fadeOut(FADE_OUT_DURATION);
    playFactionPage();
  });

  $("#yamiButton").click(function(e) {
    $("#yami #nameInfo").text("Name: " + name);
    $("#yami #ageInfo").text("Age:" + age);
    $("#yami #strInfo").text("Str: " + Math.floor(Math.random() * 100));
    $("#yami #intInfo").text("Int: " + Math.floor(Math.random() * 100));
    $("#yami #agiInfo").text("Agi: " + Math.floor(Math.random() * 100));
    $("#yami #lckInfo").text("Lck: " + Math.floor(Math.random() * 100));

    $("#faction").fadeOut(FADE_OUT_DURATION);
    $("#yami").delay(FADE_OUT_DURATION).fadeIn(FADE_IN_DURATION);
  });

  $("#hikariButton").click(function(e) {
    $("#hikari #nameInfo").text("Name: " + name);
    $("#hikari #ageInfo").text("Age:" + age);
    $("#hikari #strInfo").text("Str: " + Math.floor(Math.random() * 100));
    $("#hikari #intInfo").text("Int: " + Math.floor(Math.random() * 100));
    $("#hikari #agiInfo").text("Agi: " + Math.floor(Math.random() * 100));
    $("#hikari #lckInfo").text("Lck: " + Math.floor(Math.random() * 100));

    $("#faction").fadeOut(FADE_OUT_DURATION);
    $("#hikari").delay(FADE_OUT_DURATION).fadeIn(FADE_IN_DURATION);
  });

  $("#yamiRestartButton").click(function(e) {
    $("#yami").fadeOut(FADE_OUT_DURATION);
    playMainPage();
  });

  $("#hikariRestartButton").click(function(e) {
    $("#hikari").fadeOut(FADE_OUT_DURATION);
    $(":input").val("");
    playMainPage();
  });

  $("#yamiFaction").hover(expandYami, closeYami);
  $("#hikariFaction").hover(expandHikari, closeHikari);
}

function hideAllPages() {
  $(".topPage").fadeOut(0);
}

function playMainPage() {
  $("#main-page").fadeIn();

  var allFadeDiv = $("#main-page .mainFade");
  $(allFadeDiv).fadeTo(0, 0);

  var currentDelay = 1000;

  for (var i = 0; i < allFadeDiv.length - 2; i++) {
    $(allFadeDiv[i]).delay(currentDelay).fadeTo(FADE_IN_DURATION, 1);
    currentDelay += FADE_IN_DURATION * 2;
  }

  $("#prompt").delay(currentDelay+inputTimeoutDuration).fadeTo(FADE_IN_DURATION, 1);

  $("#nameInput").focus();
  $("#nextButton").off();
}

function playGreetingPage() {
  $("#greeting").delay(FADE_OUT_DURATION).fadeIn(FADE_IN_DURATION);

  var allFadeDiv = $("#greeting .mainFade");
  $(allFadeDiv).fadeTo(0, 0);

  var currentDelay = 2000;

  for (var i = 0; i < allFadeDiv.length; i++) {
    $(allFadeDiv[i]).delay(currentDelay).fadeTo(FADE_IN_DURATION, 1);
    currentDelay += FADE_IN_DURATION * 2;
  }
}

function playFactionPage() {
  $("#faction").delay(FADE_OUT_DURATION).fadeIn(FADE_IN_DURATION);

  var allFadeDiv = $("#faction .mainFade");
  $(allFadeDiv).fadeTo(0, 0);
}

function formValidation() {
  var name = $("#nameInput").val().trim();
  var age = $("#ageInput").val();

  if (name === "" || age === "") {
    return false;
  }

  return true;
}

function expandHikari() {
  $("#hikariFade").finish().fadeTo(FADE_IN_DURATION, 1);
}

function closeHikari() {
  $("#hikariFade").finish().fadeTo(FADE_IN_DURATION / 2, 0);
}

function expandYami() {
  $("#yamiFade").finish().fadeTo(FADE_IN_DURATION, 1);
}

function closeYami() {
  $("#yamiFade").finish().fadeTo(FADE_IN_DURATION / 2, 0);
}
