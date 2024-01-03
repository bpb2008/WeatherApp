import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: process.env.URL || "http://localhost:5173",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

app.get("/weather", async (req, res) => {
  try {
    const apiKey = process.env.API_KEY; 
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({ error: "City parameter is required!" });
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await axios.get(apiUrl);

    const temperatureKelvin = response.data.main.temp;
    const temperatureCelsius = temperatureKelvin - 273.15;
    const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;

    const feelsLikeKelvin = response.data.main.feels_like;
    const feelsLikeCelsius = feelsLikeKelvin - 273.15;
    const feelsLikeFahrenheit = (feelsLikeCelsius * 9) / 5 + 32;

    const { name, weather } = response.data; 
    const { description, icon } = weather[0]; 
    const temperature = temperatureFahrenheit.toFixed(2); 
    const feelsLike = feelsLikeFahrenheit.toFixed(2); 

    const weatherData = {
      city: name,
      description,
      temperature,
      feelsLike,
      icon,
    };

    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Internal Service Error" });
  }
});

app.listen(PORT, () => {
  console.log(`WAZZAPPPPP! Server is running on http://localhost:${PORT}`);
});
