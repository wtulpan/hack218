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
    axios
      .put(apiUrl, requestData)
      .then((response) => {
        console.log("PUT Request Successful:", response.data);
      })
      .catch((error) => {
        console.error("PUT Request Failed:", error);
      });
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
    axios
      .delete(apiUrl, requestData)
      .then((response) => {
        console.log("DELETE Request Successful:", response.data);
      })
      .catch((error) => {
        console.error("DELETE Request Failed:", error);
      });
  } catch (error) {
    console.error("Error deleting alert:", error);
  }
}

export { getAlerts, addAlert, deleteAlert };
