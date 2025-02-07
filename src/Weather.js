import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function alertSearch(event) {
    event.preventDefault();
    let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function showValue(event) {
    setCity(event.target.value);
  }
  let form = (
    <form  onSubmit={alertSearch}>
      <input type="search" placeholder="Enter a city..."  className="search"  onChange={showValue} />
      <input type="submit" value="Search"  className="submit"/>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul className="list">
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
