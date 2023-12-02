import "./Grid.css";
import "./ThermostatWidget.css";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config.json";

function ThermostatWidget() {
  const [temperature, setTemperature] = useState<number>(70);

  const alertList = ["Tryna smoke?", "No way!", "I'm Arjun!"];
  const apiUrl = `https://${config["api-ip"]}:${config["api-port"]}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${apiUrl}/api/fuckeduparjun`);
        const data = response.data;
        // Do something with the data
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // Call fetchData initially
    fetchData();

    // Set up an interval to call fetchData every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(fetchData, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="thermostat-widget widget">
      <div className="widget-title">Temperature</div>
      <div className="temperature">
        <div className="set-to-temperature">
          <div>Set to</div>
          <div>69</div>
        </div>
        <div className="current-temperature">70</div>
      </div>
    </div>
  );
}

export default ThermostatWidget;
