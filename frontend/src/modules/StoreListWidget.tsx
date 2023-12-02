import "./Grid.css";
import {
  getStoreList,
  addStoreListItem,
  deleteStoreListItem,
} from "../api/callStoreListApi";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import StoreListItem from "./StoreListItem";

interface StoreListItem {
  id: number;
  description: string;
}

function StoreListWidget() {
  const [storeList, setStoreList] = useState<StoreListItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const fetchData = async () => {
    const storeListItems = await getStoreList();
    setStoreList(storeListItems);
  };

  const handleDeleteStoreListItem = (id: number) => {
    deleteStoreListItem(id);
    fetchData();
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const storeListItems = storeList.map((storeListItem, index) => (
    <div key={index}>
      <StoreListItem
        id={storeListItem.id}
        description={storeListItem.description}
        onDelete={handleDeleteStoreListItem}
      />
    </div>
  ));

  const handleAddStoreListItem = (e: FormEvent) => {
    e.preventDefault();
    addStoreListItem(inputValue);
    fetchData();
    setInputValue("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="store-list-widget widget">
      <div className="widget-title">Store List</div>
      <div>{storeListItems}</div>
      <form onSubmit={handleAddStoreListItem}>
        <label>Add Item </label>
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

export default StoreListWidget;
