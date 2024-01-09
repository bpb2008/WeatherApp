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
      <Typography
        variant="h3"
        sx={{
          color: "#19647E",
          fontSize: "30px",
        }}
      >
        <span>{weatherData.city}</span>
      </Typography>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
        alt="Weather Icon"
      />
      <Typography
        variant="h5"
        sx={{
          color: "#19647E",
          fontSize: { xs: "20px", s: "20px", md: "30px", lg: "30px" },
        }}
      >
        Temperature: <span>{weatherData.temperature}°F</span>
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#19647E",
          fontSize: { xs: "20px", s: "20px", md: "30px", lg: "30px" },
        }}
      >
        Feels Like: <span>{weatherData.feelsLike}°F</span>
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#19647E",
          fontSize: { xs: "20px", s: "20px", md: "30px", lg: "30px" },
        }}
      >
        Description: <span>{weatherData.description}</span>
      </Typography>
    </Box>
  );
};

export default WeatherCard;
