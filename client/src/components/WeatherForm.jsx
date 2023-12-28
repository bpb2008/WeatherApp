import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import {
  CircularProgress,
  TextField,
  Button,
  Container,
  Paper,
} from "@mui/material";

const WeatherForm = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/weather?city=${city}`
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (error) {
      console.error("Yikes! Error fetching weather data: ", error);
      setError("Uhoh! Typo? Please enter a valid city name and try again.");
      setWeatherData(null);
    } finally {
      setLoading(false);
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
              sx={{ backgroundColor: "#19647E", "&:hover": "#28AFB0" }}
            >
              Get Weather!
            </Button>
          </div>
        </form>
      </Paper>
      <Paper elevation={1} square={false} sx={{ width: 800, height: 300 }}>
        {loading && <CircularProgress style={{ marginLeft: "50px" }} />}
        {error && (
          <p style={{ color: "red", marginLeft: 200 }}>
            Uhoh! Typo? Please enter a valid city name and try again.
          </p>
        )}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </Paper>
    </Container>
  );
};

export default WeatherForm;
