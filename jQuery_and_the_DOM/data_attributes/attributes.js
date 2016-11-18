$(document).ready(function() {
  $('a').click(function(e) {
    e.preventDefault();

    var sponsorLevel = $(this).attr('data-block');

    $('li').find('a.current').removeClass("current");
    $(this).addClass("current");
    $('body').find('article.current').removeClass("current");
    $('body').find('article[data-block=' + sponsorLevel + ']').addClass("current");
  })
});