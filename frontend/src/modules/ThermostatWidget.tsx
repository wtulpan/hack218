import "./Grid.css";
import "./ThermostatWidget.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getWeather } from "../api/callThermostatApi";
import config from "../config.json";

function ThermostatWidget() {
  const [temperature, setTemperature] = useState<number>(70);
  const [coolingState, setCoolingState] = useState<string>("Unknown");

  const alertList = ["Tryna smoke?", "No way!", "I'm Arjun!"];
  const apiUrl = `https://${config["api-ip"]}:${config["api-port"]}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temperature = await getWeather();
        setTemperature(temperature);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 180000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="thermostat-widget widget">
      <div className="widget-title">Outside Temperature</div>
      <div className="temperature">
        {/* <div className="set-to-temperature">
          <div>Set to</div>
          <div>69</div>
        </div> */}
        <div className="current-temperature">{Math.round(temperature)}</div>
        {/* <div className="cooling-state">Cooling State: {coolingState}</div> */}
      </div>
    </div>
  );
}

export default ThermostatWidget;
