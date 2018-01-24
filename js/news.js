// Get news
(function() {
  var eventsAPI = "http://live-westfield-ny.pantheonsite.io/api/latest-news";
  $.getJSON(eventsAPI)
  .done(function( data ) {
    for (i = 0; i < 5; i++) {
      if (data[i].image.length > 1) {
        var eventImage = "<img src='http://live-westfield-ny.pantheonsite.io" + data[i].image + "'>"
      } else {
        var eventImage = "";
      }
      $( "#news-content" ).append(
        eventImage +
        "<h2>" + data[i].title + "</h2>" +
        "<p class='lead'>" + data[i].field_section + "</p>" +
        "<p>" + data[i].body + "</p>"
      );
    }
  });
})();
