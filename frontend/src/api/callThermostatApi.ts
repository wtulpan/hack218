import { fetchWeatherApi } from "openmeteo";

const params = {
  latitude: 40.744,
  longitude: -74.0324,
  current: "temperature_2m",
  temperature_unit: "fahrenheit",
  timezone: "America/New_York",
};
const url = "https://api.open-meteo.com/v1/forecast";

async function getWeather() {
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const hourly = response.hourly()!;

  const current = response.current()!;

  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
    },
  };

  return weatherData.current.temperature2m;
}

export { getWeather };
