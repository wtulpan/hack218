import axios from "axios";
import config from "../config.json";

const apiUrl = `https://${config["api-ip"]}:${config["api-port"]}/api/alerts`;

async function getAlerts() {
  try {
    const response = await axios.get(apiUrl);
    const alerts = response.data;
    return alerts;
  } catch (error) {
    console.error("Error fetching alerts:", error);
  }
}

async function addAlert(message: string) {
  const requestData = {
    text: message,
  };
  try {
    const resp = await axios.put(apiUrl, requestData);
    console.log("Add Request Successful:", resp.data);
  } catch (error) {
    console.error("Error adding alert:", error);
  }
}

async function deleteAlert(id: number) {
  const requestData = {
    data: {
      id: id,
    },
  };
  try {
    const resp = await axios.delete(apiUrl, requestData);
    console.log("DELETE Request Successful:", resp.data);
  } catch (error) {
    console.error("DELETE Request Failed:", error);
  }
}

export { getAlerts, addAlert, deleteAlert };
