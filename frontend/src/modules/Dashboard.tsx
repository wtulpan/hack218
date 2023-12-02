import React from "react";

import ThermostatWidget from "./ThermostatWidget";
import AlertsBanner from "./AlertsBanner";
import ChoresWidget from "./ChoresWidget";
import StoreListWidget from "./StoreListWidget";
import "./Grid.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <ThermostatWidget />
      <AlertsBanner />
      <ChoresWidget />
      <StoreListWidget />
    </div>
  );
}

export default Dashboard;
