$(function() {
  var templates = {};
  var photos = "ninjas!";
  var comments;
  var photo_id = 1;
  var fade_duration = 500;

  $("script[type='text/x-handlebars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr("id")] = Handlebars.compile($tmpl.html());
  });

  $("[data-type=partial]").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr("id"), $partial.html());
  });

  $.ajax({
    url: "http://localhost:3000/photos",
    type: "GET",
    success: function(json) {
      photos = json;
      renderPhotos();
      displayPhoto(photo_id);
    }
  }).fail(function(xhr, status, errorThrown) {
    alert("We ain't found sh*t! (something went wrong)");
  });

  function renderPhotos() {
    $('#slides').html(templates.photos({photos: photos}));
  }

  function renderPhotoInformation(photo_id) {
    $('section > header').html(templates.photo_information(photos[photo_id]));
  }

  function getCommentsFor(photo_id) {
    $.ajax({
      url: "/comments",
      data: "photo_id=" + photo_id,
      type: "GET",
      success: function(photo_comments) {
        $('#comments ul').html(templates.comments({comments: photo_comments}));
      }
    });
  }

  function displayPhoto(photo_id) {
    $("figure[data-id=" + photo_id + "]").fadeIn(fade_duration);
    renderPhotoInformation(photo_id - 1);
    getCommentsFor(photo_id);
  }

  function previousPhoto() {
    $("figure[data-id=" + photo_id + "]").fadeOut(fade_duration);
    if (photo_id === 1) {
      photo_id = photos.length;
    } else {
      photo_id -= 1; 
    }
    displayPhoto(photo_id);
  }

  function nextPhoto() {
    $("figure[data-id=" + photo_id + "]").fadeOut(fade_duration);
    if (photo_id === photos.length) {
      photo_id = 1;
    } else {
      photo_id += 1; 
    }
    displayPhoto(photo_id);
  }

  $('a.prev').click(function(e) {
    e.preventDefault();
    previousPhoto();
  });

  $('a.next').click(function(e) {
    e.preventDefault();
    nextPhoto();
  });
});