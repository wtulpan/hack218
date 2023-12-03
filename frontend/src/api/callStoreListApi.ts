import axios from "axios";
import config from "../config.json";

const apiUrl = `https://${config["api-ip"]}:${config["api-port"]}/api/grocery`;
const newListUrl = `https://${config["api-ip"]}:${config["api-port"]}/api/newGroceryList`;

async function getStoreList() {
  try {
    const response = await axios.get(apiUrl);
    const storeList = response.data;
    return storeList;
  } catch (error) {
    console.error("Error fetching store list:", error);
    return [];
  }
}

async function addStoreListItem(description: string) {
  console.log(`Add ${description} to store list`);
  const requestData = {
    description,
  };
  try {
    const response = await axios.put(apiUrl, requestData);
    console.log("Add Request Successful:", response.data);
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
    const response = await axios.delete(apiUrl, requestData);
    console.log("DELETE Request Successful:", response.data);
  } catch (error) {
    console.error("Error deleting store list item:", error);
  }
}

async function newStoreList() {
  try {
    const response = await axios.put(newListUrl, {});
    console.log("New store list Request Successful:", response.data);
  } catch (error) {
    console.error("Error creating new store list:", error);
  }
}

export { getStoreList, addStoreListItem, deleteStoreListItem, newStoreList };
