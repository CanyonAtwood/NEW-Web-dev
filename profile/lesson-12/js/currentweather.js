//* Get JSON data from OpenWeatherMap

let currentWeatherRequest = new XMLHttpRequest();
const key ="0b25c1f6d23d52987a6d10f8c21a31e6";
const lat="42.0963";
const lon =" 111.8766 "

let currentWeatherApiURLstring = (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
currentWeatherRequest.open('Get', currentWeatherApiURLstring, true);
currentWeatherRequest.send();

currentWeatherRequest.onload = function () {
    let forecastData = JSON.parse(currentWeatherRequest.responseText);
    console.log(forecastData)
}   