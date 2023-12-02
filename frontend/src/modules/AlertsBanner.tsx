import "./Grid.css";
import "./AlertsBanner.css";
import { useEffect } from "react";
import axios from "axios";
import config from "../config.json";

function AlertsBanner() {
  const alertList = ["Tryna smoke?", "No way!", "I'm Arjun!"];
  const apiUrl = `https://${config["api-ip"]}:${config["api-port"]}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${apiUrl}/api/arjun`);
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

  const alerts = alertList.map((alert, index) => (
    <div key={index}>{alert}</div>
  ));

  return (
    <div className="alerts-banner widget">
      <div className="widget-title">Alerts</div>
      <div className="alerts">{alerts}</div>
    </div>
  );
}

export default AlertsBanner;
