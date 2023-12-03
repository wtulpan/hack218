import "./Grid.css";
import "./AlertsBanner.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import AlertListItem from "./AlertListItem";
import { getAlerts, addAlert, deleteAlert } from "../api/callAlertsApi";

interface AlertItem {
  id: number;
  text: string;
  created: string;
}

function AlertsBanner() {
  const [alertList, setAlertList] = useState<AlertItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const fetchData = async () => {
    const alerts = await getAlerts();
    setAlertList(alerts);
  };

  const handleDeleteAlert = async (id: number) => {
    await deleteAlert(id);
    fetchData();
  };

  useEffect(() => {
    fetchData();
    // const intervalId = setInterval(fetchData, 5000);
    // return () => clearInterval(intervalId);
  }, []);

  const alerts = alertList.map((alertItem: AlertItem, index) => (
    <div key={index}>
      <AlertListItem
        id={alertItem.id}
        message={alertItem.text}
        dateString={alertItem.created}
        onDelete={handleDeleteAlert}
      />
    </div>
  ));

  const handleAddAlert = async (e: FormEvent) => {
    e.preventDefault();
    await addAlert(inputValue);
    fetchData();
    setInputValue("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="alerts-banner widget">
      <div className="widget-title">Alerts</div>
      <div className="alerts">{alerts}</div>
      <form onSubmit={handleAddAlert}>
        <label>Add an Alert </label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AlertsBanner;
