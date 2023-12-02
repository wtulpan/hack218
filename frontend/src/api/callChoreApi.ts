import axios from "axios";
import config from "../config.json";

const apiUrl = `https://${config["api-ip"]}:${config["api-port"]}/api/chores`;

async function getChores() {
  try {
    const response = await axios.get(apiUrl);
    const alerts = response.data;
    return alerts;
  } catch (error) {
    console.error("Error fetching chores:", error);
  }
}

async function markChoreDone(id: number) {
  const requestData = {
    id,
  };
  try {
    axios
      .post(apiUrl, requestData)
      .then((response) => {
        console.log("POST Request Successful:", response.data);
      })
      .catch((error) => {
        console.error("POST Request Failed:", error);
      });
  } catch (error) {
    console.error("Error marking chore done:", error);
  }
}

export { getChores, markChoreDone };
