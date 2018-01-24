// Get events
(function() {
  var eventsAPI = "http://live-westfield-ny.pantheonsite.io/api/upcoming-events";
  $.getJSON(eventsAPI)
  .done(function( data ) {
    for (i = 0; i < 10; i++) {
      $( "#events" ).append(
        "<h2>" + data[i].title + "</h2>" +
        "<p>" + data[i].field_section + "</p>" +
        "<p class='lead'>" + data[i].field_date_time + "</p>" +
        "<p>" + data[i].field_address + "</p>"
      );
    }
  });
})();
