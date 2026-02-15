// your config cod
import { faker } from "@faker-js/faker";
import { ThreeDayTemperatureForecast } from "../types/weatherData.js";

type TempRange = { min: number; max: number };

const cityTemperatureRanges: Record<string, TempRange> = {
  london: { min: -5, max: 25 },
  dublin: { min: -5, max: 24 },
  nepal: { min: -10, max: 30 },
  sarlahi: { min: 0, max: 35 },
};

export const generateThreeDayTemperatureForecast = (
  city: string
): ThreeDayTemperatureForecast => {
  const key = city.toLowerCase();
  const range = cityTemperatureRanges[key] ?? cityTemperatureRanges["london"];

  return {
    dayOne: faker.number.int(range),
    dayTwo: faker.number.int(range),
    dayThree: faker.number.int(range),
  };
};