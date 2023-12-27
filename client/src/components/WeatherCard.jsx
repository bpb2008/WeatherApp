import React from "react";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weatherDisplay">
      <div className="icon">
        <h3>
          <span>{weatherData.city}</span>
        </h3>
        {weatherData.icon && (
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
            alt="Weather Icon"
          />
        )}
        <p>
          Temperature: <span>{weatherData.temperature}°F</span>
        </p>
        <p>
          Feels Like: <span>{weatherData.feelsLike}°F</span>
        </p>
        <p>
          Description: <span>{weatherData.description}</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
