import { useEffect, useState } from "react";
import "./Grid.css";
import { getChores, markChoreDone } from "../api/callChoreApi";
import ChoreListItem from "./ChoreListItem";

interface ChoreItem {
  id: number;
  name: string;
  completed: string;
}

function ChoresWidget() {
  const [choreList, setChoreList] = useState<ChoreItem[]>([]);

  const fetchData = async () => {
    const chores = await getChores();
    setChoreList(chores);
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleMarkCompleted = (id: number) => {
    markChoreDone(id);
    fetchData();
  };

  console.log(choreList);
  const chores = choreList.map((chore, index) => (
    <ChoreListItem
      key={index}
      id={chore.id}
      name={chore.name}
      lastCompleted={chore.completed}
      onCompleted={handleMarkCompleted}
    />
  ));

  return (
    <div className="chores-widget widget">
      <div className="widget-title">Chore Status</div>
      {chores}
    </div>
  );
}

export default ChoresWidget;
