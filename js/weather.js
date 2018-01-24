//Get label for day after tomorrow
var today = (new Date()).getDay();
var dayAfterTomorrow = today + 2;
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// Get current weather
(function() {
  var currentWeatherAPI = "http://api.openweathermap.org/data/2.5/weather?zip=14787,us&units=imperial&APPID=4e527f2dc589c215d247d03fc3b2263a";
  $.getJSON(currentWeatherAPI)
    .done(function( data ) {
      $( "#weather-content" ).append(
        "<div class='col-md-4'>" +
        "<h3>Now</h3>" +
        "<img src='http://labs.orbitist.com/poster/img/weather-icons/" + data.weather[0].icon + ".svg'>" +
        "<p>" + data.main.temp.toFixed() + "°</p>" +
        "</div><!-- .col-md-4 -->"
     );
    });
})();

// Get 2-day forcast
(function() {
  var forecastWeatherAPI = "http://api.openweathermap.org/data/2.5/forecast?zip=14787,us&units=imperial&APPID=4e527f2dc589c215d247d03fc3b2263a";
  $.getJSON(forecastWeatherAPI)
    .done(function( data ) {
      $( "#weather-content" ).append(
        "<div class='col-md-4'>" +
        "<h3>Tomorrow</h3>" +
        "<img src='http://labs.orbitist.com/poster/img/weather-icons/" + data.list[8].weather[0].icon + ".svg'>" +
        "<p>" + data.list[6].main.temp.toFixed() + "°</p>" +
        "</div><!-- .col-md-4 -->"
      );
      $( "#weather-content" ).append(
        "<div class='col-md-4'>" +
        "<h3>" + days[dayAfterTomorrow] + "</h3>" +
        "<img src='http://labs.orbitist.com/poster/img/weather-icons/" + data.list[16].weather[0].icon + ".svg'>" +
        "<p>" + data.list[14].main.temp.toFixed() + "°</p>" +
        "</div><!-- .col-md-4 -->"
      );
    });
})();
