$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var first = +$('#first').val();
    var second = +$('#second').val();
    var operation = $('select').val();
    var answer;

    if (operation === 'add') {
      answer = first + second;
    } else if (operation === 'subtract') {
      answer = first - second;
    } else if (operation === 'multiply') {
      answer = first * second;
    } else {
      answer = first / second;
    }

    $('p').text(answer);
  });
});