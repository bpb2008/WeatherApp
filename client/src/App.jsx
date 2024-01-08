import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const paperStyles = {
    width: {
      xs: "350px",
      s: "350px",
      md: "400px",
      lg: "800px",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const getWeather = async () => {
    try {
      setLoading(true);
      const apiUrl = `${
        import.meta.env.VITE_BASE_API_URL
      }/weather?city=${city}`;
      const response = await fetch(apiUrl);
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
    <Container>
      <Paper
        elevation={1}
        sx={{
          ...paperStyles,
          height: 100,
          marginTop: 5,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#19647E",
            fontSize: { xs: "30px", s: "30px", md: "30px", lg: "30px" },
          }}
        >
          Brittany's Weather App
        </Typography>
      </Paper>

      <Paper
        elevation={1}
        sx={{
          ...paperStyles,
          height: { xs: 125, s: 125, md: 175, lg: 175 },
          marginTop: 3,
        }}
      >
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
            sx={{
              width: {
                xs: "330px",
                s: "330px",
                md: "380px",
                lg: "780px",
                xl: "780px",
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#19647E",
              marginTop: "20px",
              "&:hover": { backgroundColor: "#28AFB0" },
            }}
          >
            Get Weather!
          </Button>
        </form>
      </Paper>
      <Paper
        elevation={1}
        sx={{
          ...paperStyles,
          height: 350,
          marginTop: 3,
        }}
      >
        {loading && <CircularProgress style={{ color: "#28AF80" }} />}
        {error && (
          <Typography variant="body1" sx={{ color: "red" }}>
            Uhoh! Typo? Please enter a valid city name and try again.
          </Typography>
        )}
        {weatherData && <WeatherCard weatherData={weatherData} />}
      </Paper>
    </Container>
  );
}

export default App;
