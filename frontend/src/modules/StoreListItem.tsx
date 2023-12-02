import DeleteButton from "./DeleteButton";

interface StoreListItemProps {
  id: number;
  description: string;
  onDelete: (id: number) => void;
}

function StoreListItem({ id, description, onDelete }: StoreListItemProps) {
  return (
    <div>
      {description}
      <DeleteButton onDelete={() => onDelete(id)} />
    </div>
  );
}

export default StoreListItem;
