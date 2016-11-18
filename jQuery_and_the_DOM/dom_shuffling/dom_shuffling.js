$(document).ready(function() {
  var $header = $('body > header');
  var $mySite = $('main > h1');
  var $chinFigure = $('figure + figure');
  var $babyFigure = $('article + figure');
  var $babyText = $('img[alt="The chin stick"] + figcaption').text();
  var $chinText = $('img[alt="The baby mop"] + figcaption').text();

  $('body').prepend($header);
  $header.prepend($mySite);
  $('article').append($chinFigure);
  $('article').append($babyFigure);
  $('img[alt="The chin stick"] + figcaption').text($chinText);
  $('img[alt="The baby mop"] + figcaption').text($babyText);

});