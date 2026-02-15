import express, { Request, Response } from "express";
import { getWeatherData } from "../controllers/weatherController.js";
import { validateCityName } from "../middleware/validators.js";
import { generateThreeDayTemperatureForecast } from "../config/config.js";
import { ThreeDayTemperatureForecast } from "../types/weatherData.js";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:city", validateCityName, getWeatherData);

router.get("/:city/forecast", (req: Request, res: Response<ThreeDayTemperatureForecast>) => {
  const { city } = req.params;
  const forecast = generateThreeDayTemperatureForecast(city);
  res.status(200).json(forecast);
});


// We will export the router
export default router;
