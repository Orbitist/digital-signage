//Get label for day after tomorrow
var today = (new Date()).getDay();
var dayAfterTomorrow = today + 2;
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// Get current weather
(function() {
  var currentWeatherAPI = "http://api.openweathermap.org/data/2.5/weather?zip=14787,us&units=imperial&APPID=4e527f2dc589c215d247d03fc3b2263a";
  $.getJSON(currentWeatherAPI)
    .done(function( data ) {
      $( "#weather" ).append(
        "<div class='col-md-4'>" +
        "<h2>Now</h2>" +
        "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" +
        "<p class='lead'>" + data.main.temp.toFixed() + "°</p>" +
        "</div><!-- .col-md-4 -->"
     );
    });
})();

// Get 2-day forcast
(function() {
  var forecastWeatherAPI = "http://api.openweathermap.org/data/2.5/forecast?zip=14787,us&units=imperial&APPID=4e527f2dc589c215d247d03fc3b2263a";
  $.getJSON(forecastWeatherAPI)
    .done(function( data ) {
      $( "#weather" ).append(
        "<div class='col-md-4'>" +
        "<h2>Tomorrow</h2>" +
        "<img src='http://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png'>" +
        "<p class='lead'>" + data.list[6].main.temp.toFixed() + "°</p>" +
        "</div><!-- .col-md-4 -->"
      );
      $( "#weather" ).append(
        "<div class='col-md-4'>" +
        "<h2>" + days[dayAfterTomorrow] + "</h2>" +
        "<img src='http://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png'>" +
        "<p class='lead'>" + data.list[14].main.temp.toFixed() + "°</p>" +
        "</div><!-- .col-md-4 -->"
      );
    });
})();
