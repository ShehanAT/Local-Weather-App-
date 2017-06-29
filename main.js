
//use class for jQuery and id for JavaScript
if ("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition(function(position){
loadWeather(position.coords.latitude + "," + position.coords.longitude);		
	});
		
	
	}
	
	$(document).ready(function(){
		setInterval(getWeather, 10000/* in milliseconds, is 10 seconds */)
		
	});
	function loadWeather(location, woeid){
		$.simpleWeather({
			location: location,
			woeid:woeid,
			unit:'c',
			success: function(weather){
				city = weather.city;
				temp = weather.temp + "&deg";
				updated = weather.updated;
				wcode = '<img class="weathericon" src="C:/Users/Dell/Desktop/freeCodeCamp/simpleWeather/img/weathericons/' + weather.code + '.jpg">';
				wind = "<p>" + weather.wind.speed + " " + weather.units.speed + "</p>";
				humidity = weather.humidity + '%';
				image = weather.image;
			$(".location").text("City: "+ city);
			$(".temperature").html("Current Temperature: " + temp);
			$(".climate_bg").html(wcode);
			$(".windspeed").html("Windspeed: " + wind);
			$(".humidity").text("Humidity: " + humidity);
			$(".update").text("Last updated: " + updated);
			},
			error: function(error){
				$(".error").html("<p>" + error + "</p>");
				
			}
		});
	};
	

