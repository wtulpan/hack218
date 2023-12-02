import "./Grid.css";
import "./ThermostatWidget.css";
import { useState } from "react";

function ThermostatWidget() {
  const [temperature, setTemperature] = useState<number>(70);

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
