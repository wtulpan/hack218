import axios from "axios";
import config from "../config.json";

const apiUrl = `https://${config["api-ip"]}:${config["api-port"]}/api/grocery`;

async function getGroceryList() {
  try {
    const response = await axios.get(apiUrl);
    const alerts = response.data;
    return alerts;
  } catch (error) {
    console.error("Error fetching alerts:", error);
  }
}

export { getGroceryList };
