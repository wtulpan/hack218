import "./AlertListItem.css";

interface AlertListItemProps {
  id: number;
  message: string;
  dateString: string;
  onDelete: (id: number) => void;
}

function AlertListItem({
  id,
  message,
  dateString,
  onDelete,
}: AlertListItemProps) {
  const timestamp = Date.parse(dateString);
  const currentTime = new Date();
  const timeDifferenceInMinutes =
    (currentTime.getTime() - timestamp) / 1000 / 60;

  const classNames = `alert-list-item ${
    timeDifferenceInMinutes < 30 && "recent"
  }`;
  return (
    <div className={classNames}>
      {message}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default AlertListItem;
