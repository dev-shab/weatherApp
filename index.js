const inputElement = document.getElementsByTagName("input")[0];
const buttonElement = document.getElementsByTagName("button")[0];

const API_KEY = "b117cb2713f9ab3842542462ad4b532e";

buttonElement.onclick = async (e) => {
  e.preventDefault();
  const cityValue = inputElement.value;
  const fetchWeatherData = async () => {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}`
    );
    const weatherData = await weatherResponse.json();
    return weatherData;
  };
  const weatherData = await fetchWeatherData();
  document.getElementsByClassName("city")[0].innerHTML = weatherData.name;
  document.getElementsByClassName("temp")[0].innerHTML = `${Math.round(
    weatherData.main.temp - 273.15
  ).toPrecision(3)}°c`;
  document.getElementsByClassName("humidity")[0].innerHTML =
    weatherData.main.humidity;
  document.getElementsByClassName("wind")[0].innerHTML = weatherData.wind.speed;
};
