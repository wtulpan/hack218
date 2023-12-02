import "./ChoreListItem.css";

interface ChoreListItemProps {
  id: number;
  name: string;
  lastCompleted: string;
  onCompleted: (id: number) => void;
}

function ChoreListItem({
  id,
  name,
  lastCompleted,
  onCompleted,
}: ChoreListItemProps) {
  const datetime = new Date(lastCompleted);

  return (
    <div className="chore-list-item">
      {" "}
      <div className="mark-complete">
        <button onClick={() => onCompleted(id)}>Mark Completed</button>
      </div>
      <div className="chore-name">{name}</div>
      <div className="last-completed">
        Last Completed: {datetime.toDateString()}
      </div>
    </div>
  );
}

export default ChoreListItem;
