import DeleteButton from "./DeleteButton";
import "./StoreListItem.css";

interface StoreListItemProps {
  id: number;
  description: string;
  onDelete: (id: number) => void;
}

function StoreListItem({ id, description, onDelete }: StoreListItemProps) {
  return (
    <div className="store-list-item">
      <div className="delete">
        <DeleteButton onDelete={() => onDelete(id)} />
      </div>
      <div className="description">{description}</div>
    </div>
  );
}

export default StoreListItem;
