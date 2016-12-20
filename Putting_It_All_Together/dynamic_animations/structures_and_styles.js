$(document).ready(function() {
  function newShape() {
    var $formData = $('form').serializeArray();
    var $shape = $('<div></div>');
    var styles = {
      top: +$formData[1]['value'],
      left: +$formData[2]['value']
    }

    $shape.data('start_x', +$formData[1]['value'])
          .data('start_y', +$formData[2]['value'])
          .data('end_x', +$formData[3]['value'])
          .data('end_y', +$formData[4]['value'])
    
    $shape.addClass($formData[0]["value"]).css(styles);
    $('div#canvas').append($shape);
  };

  function animateShapes() {
    var styles;

    $('div > div').each(function() {
      styles = {
        top: $(this).data('end_x'),
        left: $(this).data('end_y')
      }
      console.log(styles);
      $(this).animate(styles, 2000);
    });
  }

  $('form').submit(function(event) {
    event.preventDefault();

    newShape();
  });

  $('a#animate').click(function(event) {
    event.preventDefault();

    animateShapes();
  });

  $('a#stop').click(function(event) {
    event.preventDefault();

    $('div > div').stop();
  });

  $('a#reset').click(function(event) {
    event.preventDefault();

    $('div > div').each(function() {
      styles = {
        top: $(this).data('start_x'),
        left: $(this).data('start_y')
      }
      $(this).animate(styles, 200);
    });
  });
});