// Get events
function getEvents() {
  var eventsAPI = "https://westfieldny.com/api/upcoming-events?_format=json";
  $.getJSON(eventsAPI)
  .done(function( data ) {
    for (i = 0; i < 4; i++) {
      $( "#events-content" ).append(
        "<h3>" + data[i].title + " - " + data[i].field_section + "</h3>" +
        "<p class='lead'>" + data[i].field_date_time + " - " + data[i].field_address + "</p>" +
        "<hr>"
      );
    }
  });
};

getEvents();

setInterval(function(){
    $('#events-content').html('');
    getEvents();
},300000);
