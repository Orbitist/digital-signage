// Get news
function getNews() {
  var eventsAPI = "https://westfieldny.com/api/latest-news";
  $.getJSON(eventsAPI)
  .done(function( data ) {
    for (i = 0; i < 5; i++) {
      if (data[i].image.length > 1) {
        var eventImage = "<img class='img-responsive' src='http://live-westfield-ny.pantheonsite.io" + data[i].image + "'>"
      } else {
        var eventImage = "";
      }
      $( "#news-content" ).append(
        "<div class='row'><div class='col-md-9'>" +
        "<h3>" + data[i].title + " - " + data[i].field_section + "</h3>" +
        "<p>" + data[i].body + "</p>" +
        "</div>" +
        "<div class='col-md-3'>" +
        eventImage +
        "</div></div>" +
        "<hr>"
      );
    }
  });
};

getNews();

setInterval(function(){
    $('#news-content').html('');
    getNews();
},300000);
