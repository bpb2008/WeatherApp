import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherForm = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");

  const getWeather = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/weather?city=${city}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log("Yikes! Error fetching weather data: ", error);
    }
  };

  return (
    <div>
      <h1>Brittany's Weather App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getWeather();
        }}
      >
        <input
          type="text"
          id="cityInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Get Weather!</button>
      </form>
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherForm;
