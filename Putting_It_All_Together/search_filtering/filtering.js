function unique(array) {
  var output = [];

  array.forEach(function(element) {
    output.includes(element) ? output : output.push(element);
  });

  return output;
};

$(function() {
  var items = [{
    "title": "The Legend of Zelda: Majora's Mask 3D",
    "id": 1,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 2,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 3,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 4,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 5,
    "category": "Xbox One"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 6,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 7,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 8,
    "category": "Xbox One"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 9,
    "category": "PlayStation 4"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 10,
    "category": "Xbox One"
  }]

  var categories = items.map(function(item) {
    return item.category;
  });

  categories = unique(categories);

  $.each(items, function(index, item) {
    $('main ul').append("<li>" + item.title + " for " + item.category + "</li>");
    $('main ul li').last().attr("data-id", item.id);
  });

  $.each(categories, function(index, category) {
    $('aside ul').append('<li><label><input type="checkbox" checked />' + category + '</label></li>');
    $('aside ul input').last().attr("value", category);
  });

  $('input:checkbox').on("change", function() {
    var category = $(this).val();
    var category_items;

    category_items = items.filter(function(item) {
      return item.category === category;
    });

    category_items.forEach(function(item) {
      $('main li').filter("[data-id=" + item.id + "]").toggle();
    });
  });
});