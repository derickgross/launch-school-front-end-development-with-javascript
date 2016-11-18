$(document).ready(function() {
  $('a').click(function(event) {
    var linkClass = $(this).find('img').attr('class');

    event.preventDefault();
    $(this).closest('ul').siblings('figure').stop().fadeOut(300);//.css('display', 'none');
    $(this).closest('ul').siblings('figure.' + linkClass).delay(300).fadeIn();
    $(this).closest('ul').find('img').css("border", "none");
    $(this).find('img').css("border", "4px solid #A065FF");
  });
});