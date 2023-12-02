import addIcon from "../addicon.png";
import "./DeleteButton.css";

interface AddButtonProps {
  onAdd: () => void;
}

function AddButton({ onAdd }: AddButtonProps) {
  return (
    <span className="delete-button">
      <img src={addIcon} onClick={onAdd} />
    </span>
  );
}

export default AddButton;
