import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const WeatherCard = ({ weatherData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
        padding: "20px",
        color: "#37392E",
      }}
    >
      <Typography variant="h3">
        <span>{weatherData.city}</span>
      </Typography>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
        alt="Weather Icon"
      />
      <Typography variant="h5">
        Temperature: <span>{weatherData.temperature}°F</span>
      </Typography>
      <Typography variant="h5">
        Feels Like: <span>{weatherData.feelsLike}°F</span>
      </Typography>
      <Typography variant="h5">
        Description: <span>{weatherData.description}</span>
      </Typography>
    </Box>
  );
};

export default WeatherCard;
