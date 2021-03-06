$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass("opened");
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass("opened");
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val(),
        total = getLuhnTotal(cc_number)
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var birthstone = { "January": "garnet",
        "February": "amethyst", 
        "March": "aquamarine or bloodstone", 
        "April": "diamond", 
        "May": "emerald", 
        "June": "pearl, moonstone, or alexandrite", 
        "July": "ruby", 
        "August": "peridot", 
        "September": "sapphire", 
        "October": "opal or tourmaline", 
        "November": "topaz or citrine", 
        "December": "turquoise, zircon, or tanzanite"
    }

    var month = $(this).text(),
        $stone = $("#birthstone");

    $stone.text("Your birthstone is " + birthstone[month] + ".");

    //$("#birthstone").text($stone);
  });

  function getLuhnTotal(cc_number) {
    var odd_total = 0,
        even_total = 0;

    cc_number = cc_number.split("").reverse();

    for (var i = 0, len = cc_number.length; i < len; i++) {
      if (i % 2 == 1) {
        cc_number[i] = (+cc_number[i] * 2) + "";
        if (cc_number[i].length > 1) {
          cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
        }
        else {
          cc_number[i] = +cc_number[i];
        }
        odd_total += cc_number[i];
      }
      else {
        even_total += +cc_number[i];
      }
    }
    if ((odd_total + even_total) % 10 == 0) {
      $(this).find(".success").show();
      $(this).find(".error").hide();
    }
    else {
      $(this).find(".error").show();
      $(this).find(".success").hide();
    }
  }
});
