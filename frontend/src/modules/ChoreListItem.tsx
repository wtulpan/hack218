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
    <div>
      {name} Last Completed: {datetime.toDateString()}
      <button onClick={() => onCompleted(id)}>Mark Completed</button>
    </div>
  );
}

export default ChoreListItem;
