import "./Grid.css";
import "./StoreListWidget.css";
import {
  getStoreList,
  addStoreListItem,
  deleteStoreListItem,
  newStoreList,
} from "../api/callStoreListApi";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import StoreListItem from "./StoreListItem";
import AddButton from "./AddButton";

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
    <StoreListItem
      key={index}
      id={storeListItem.id}
      description={storeListItem.description}
      onDelete={handleDeleteStoreListItem}
    />
  ));

  const handleAddStoreListItem = () => {
    addStoreListItem(inputValue);
    fetchData();
    setInputValue("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddStoreListItem();
  };

  const handleNewStoreList = () => {
    newStoreList();
    fetchData();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="store-list-widget widget">
      <div>
        <div className="new-store-list-button">
          <button onClick={handleNewStoreList}>New List</button>
        </div>
        <div className="widget-title">Store List</div>
      </div>
      <div className="add-store-list-item">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          ></input>
          <AddButton onAdd={handleAddStoreListItem} />
        </form>
      </div>
      <div className="store-list">{storeListItems}</div>
    </div>
  );
}

export default StoreListWidget;
