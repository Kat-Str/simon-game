var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}

nextSequence();

$("#red").click(function () {
  var userChosenColor = $("#red").attr("id");
  console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});
$("#blue").click(function () {
  var userChosenColor = $("#blue").attr("id");
  console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});
$("#green").click(function () {
  var userChosenColor = $("#green").attr("id");
  console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});
$("#yellow").click(function () {
  var userChosenColor = $("#yellow").attr("id");
  console.log(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});

$(".btn").click(function () {
  $(this).addClass("pressed");
  setTimeout(() => {
    $(this).removeClass("pressed");
  }, 150);
});
