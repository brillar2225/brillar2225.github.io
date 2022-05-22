// can't find to set environment variables with ES6
const API_KEY = 'MY_API_KEY';

const city = document.querySelector('#city');
const weather = document.querySelector('#weather');
const temp = document.querySelector('#temp');

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const countryName = data.sys.country;
      const cityName = data.name;
      const currentWeather = data.weather[0].main;
      const currentTemp = data.main.temp;
      city.innerHTML = `${cityName}, ${countryName}`;
      weather.innerHTML = currentWeather;
      temp.innerHTML = `${currentTemp}&#8451;`;
    });
}

function onGeoError() {
  alert('Cannot find your location. Please allow to get your location.');
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
