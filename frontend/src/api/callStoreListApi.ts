import axios from "axios";
import config from "../config.json";

const apiUrl = `https://${config["api-ip"]}:${config["api-port"]}/api/grocery`;
const newListUrl = `https://${config["api-ip"]}:${config["api-port"]}/api/newGroceryList`;

async function getStoreList() {
  try {
    const response = await axios.get(apiUrl);
    const alerts = response.data;
    return alerts;
  } catch (error) {
    console.error("Error fetching alerts:", error);
  }
}

async function addStoreListItem(description: string) {
  console.log(`Add ${description} to store list`);
  const requestData = {
    description,
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
    console.error("Error adding store list item:", error);
  }
}

async function deleteStoreListItem(id: number) {
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
    console.error("Error deleting store list item:", error);
  }
}

async function newStoreList() {
  try {
    axios
      .put(newListUrl, {})
      .then((response) => {
        console.log("New Grocery List Request Successful:", response.data);
      })
      .catch((error) => {
        console.error("New Grocery List Request Failed:", error);
      });
  } catch (error) {
    console.error("Error creating new store list:", error);
  }
}

export { getStoreList, addStoreListItem, deleteStoreListItem, newStoreList };
