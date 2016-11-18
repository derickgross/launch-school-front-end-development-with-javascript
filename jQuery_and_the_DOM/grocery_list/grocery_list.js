$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    
    var item = $('#item').val();
    var quantity;

    if ($('#quantity').val() === '') {
      quantity = '1';
    } else {
      quantity = $('#quantity').val();
    }
    
    var li = '<li>' + quantity + ' ' + item + '</li>';
    $('#list').append(li);

    $('form').get(0).reset();
  });
});