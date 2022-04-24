function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  conditionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  speedElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "4dabb70bffff905cdbe14c6bb466fc7b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
