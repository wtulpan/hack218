import trashIcon from "../trashicon.jpg";
import "./DeleteButton.css";

interface DeleteButtonProps {
  onDelete: () => void;
}

function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <span className="delete-button">
      <img src={trashIcon} onClick={onDelete} />
    </span>
  );
}

export default DeleteButton;
