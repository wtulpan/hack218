interface StoreListItemProps {
  id: number;
  description: string;
  onDelete: (id: number) => void;
}

function StoreListItem({ id, description, onDelete }: StoreListItemProps) {
  return (
    <div>
      {description}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default StoreListItem;
