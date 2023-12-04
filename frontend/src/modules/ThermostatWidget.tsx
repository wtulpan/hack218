import "./Grid.css";
import "./ThermostatWidget.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getWeather } from "../api/callThermostatApi";
import config from "../config.json";

interface WeatherData {
  current: {
    time: Date;
    temperature2m: number;
  };
  hourly: {
    time: Date[];
    temperature2m: Float32Array;
  };
}

const formatTime = (inputTime: string): string =>
  inputTime.replace(/:\d{2}:\d{2}\s/, " ");

function ThermostatWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>();
  const [coolingState, setCoolingState] = useState<string>("Unknown");

  const alertList = ["Tryna smoke?", "No way!", "I'm Arjun!"];
  const apiUrl = `https://${config["api-ip"]}:${config["api-port"]}`;

  const fetchData = async () => {
    try {
      const weatherData: WeatherData = await getWeather();
      setWeatherData(weatherData);
    } catch (error) {
      console.error("Error fetching temperature:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 180000);
    return () => clearInterval(intervalId);
  }, []);

  let hourlyNodes = null;
  if (weatherData) {
    const currentTime = new Date();
    const hourly = weatherData.hourly;
    const next10HoursData = hourly.time
      .map((time, index) => ({
        time,
        temperature: hourly.temperature2m[index],
      }))
      .filter((data) => data.time >= currentTime)
      .slice(0, 10);

    // Map the filtered data into React nodes
    hourlyNodes = next10HoursData.map((data, index) => (
      <div key={index}>
        <div>
          {formatTime(data.time.toLocaleTimeString())}
          {" - "}
          {Math.round(data.temperature)}°F
        </div>
      </div>
    ));
  }

  return (
    <div className="thermostat-widget widget">
      <div className="widget-title">Outside Temperature</div>
      <div className="temperature">
        {/* <div className="set-to-temperature">
          <div>Set to</div>
          <div>69</div>
        </div> */}
        <div className="current-temperature">
          {weatherData?.current.temperature2m &&
            Math.round(weatherData?.current.temperature2m)}
        </div>
        {hourlyNodes}
        {/* <div className="cooling-state">Cooling State: {coolingState}</div> */}
      </div>
    </div>
  );
}

export default ThermostatWidget;
