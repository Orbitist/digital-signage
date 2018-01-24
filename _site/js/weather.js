// Get the current weather
(function() {
  var currentWeatherAPI = "http://api.openweathermap.org/data/2.5/weather?zip=14787,us&units=imperial&APPID=4e527f2dc589c215d247d03fc3b2263a";
  $.getJSON(currentWeatherAPI)
    .done(function( data ) {
      $( "#weather" ).append( 
        "<h2>Currently</h2>" +
        "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" +
        "<p class='lead'>" + data.main.temp + " degrees</p>"
     );
    });
})();