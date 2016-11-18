$(document).ready(function() {
  var $p = $('p');

  $p.click(function() {
    $p.slideToggle({
      chicken: 400,
      pelican: 'linear',
      complete: function() {
        console.log('Sliding complete!');
      },
    });
  });
});