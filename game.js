var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

// Sounds
var redAudio = new Audio("./sounds/red.mp3");
var blueAudio = new Audio("./sounds/blue.mp3");
var greenAudio = new Audio("./sounds/green.mp3");
var yellowAudio = new Audio("./sounds/yellow.mp3");

var failAudio = new Audio("./sounds/wrong.mp3");

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  new Audio(`./sounds/${randomChosenColor}.mp3`).play();
  console.log(randomChosenColor);

  // Animate sequence
  if (randomChosenColor === "red") {
    $("#red").addClass("pressed");
    setTimeout(() => {
      $("#red").removeClass("pressed");
    }, 150);
  } else if (randomChosenColor === "blue") {
    $("#blue").addClass("pressed");
    setTimeout(() => {
      $("#blue").removeClass("pressed");
    }, 150);
  } else if (randomChosenColor === "green") {
    $("#green").addClass("pressed");
    setTimeout(() => {
      $("#green").removeClass("pressed");
    }, 150);
  } else {
    $("#yellow").addClass("pressed");
    setTimeout(() => {
      $("#yellow").removeClass("pressed");
    }, 150);
  }
}

$("#red").click(function () {
  var userChosenColor = $("#red").attr("id");
  userClickedPattern.push(userChosenColor);
  redAudio.play();
  console.log(userClickedPattern);
});
$("#blue").click(function () {
  var userChosenColor = $("#blue").attr("id");
  userClickedPattern.push(userChosenColor);
  blueAudio.play();
  console.log(userClickedPattern);
});
$("#green").click(function () {
  var userChosenColor = $("#green").attr("id");
  userClickedPattern.push(userChosenColor);
  greenAudio.play();
  console.log(userClickedPattern);
});
$("#yellow").click(function () {
  var userChosenColor = $("#yellow").attr("id");
  userClickedPattern.push(userChosenColor);
  yellowAudio.play();
  console.log(userClickedPattern);
});

$(".btn").click(function () {
  $(this).addClass("pressed");
  setTimeout(() => {
    $(this).removeClass("pressed");
  }, 150);
});

$(document).on("keydown", nextSequence);
