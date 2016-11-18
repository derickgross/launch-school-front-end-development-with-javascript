$(document).ready(function() {
  function randomize() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function displayMessage(message) {
    $('p').text(message);
  }

  var answer = randomize();
  var tries = 0;

  $('form').submit(function(event) {
    event.preventDefault();
    tries += 1;

    var guess = +$('input#guess').val();
    var message;

    if (guess > answer) {
      message = "The number is lower than " + guess;
    } else if (guess < answer) {
      message = "The number is higher than " + guess;
    } else {
      message = "Correct! " + guess + " is the answer. It took you " + tries + " tries."
    }

    displayMessage(message);
  });

  $('a').click(function(event) {
    event.preventDefault();

    answer = randomize();
    tries = 0;
    message = "Guess a number from 1 to 100";
    displayMessage(message);
  });
});