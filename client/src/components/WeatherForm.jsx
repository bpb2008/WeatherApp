import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import { Typography, TextField, Button, Container, Paper } from "@mui/material";

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
    <Container maxWidth="md">
      <Paper elevation={1} square={false} sx={{ width: 800, height: 100 }}>
        <h1>Brittany's Weather App</h1>
      </Paper>

      <Paper elevation={1} square={false} sx={{ width: 800, height: 150 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getWeather();
          }}
        >
          <TextField
            id="cityInput"
            label="Choose a city"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            fullWidth
          />
          <div className="button">
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#19647E" }}
            >
              Get Weather!
            </Button>
          </div>
        </form>
      </Paper>
      <Paper elevation={1} square={false} sx={{ width: 800, height: 300 }}>
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </Paper>
    </Container>
  );
};

export default WeatherForm;
