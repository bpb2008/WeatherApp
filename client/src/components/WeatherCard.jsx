import React from "react";

const WeatherCard = ({ weatherData }) => {
  return (
    <div>
      <p>City: {weatherData.city}</p>
      <p>Temperature: {weatherData.temperature}°F</p>
      <p>Feels Like: {weatherData.feelsLike}°F</p>
      <p>Description: {weatherData.description}</p>
      {weatherData.icon && (
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
          alt="Weather Icon"
        />
      )}
    </div>
  );
};

export default WeatherCard;
