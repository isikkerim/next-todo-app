import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TodoItemProps {
  task: string;
  onDelete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ task, onDelete }) => (
  <li className="flex justify-between items-center p-4 bg-gray-100 rounded shadow">
    <span>{task}</span>
    <button onClick={onDelete} className="text-red-500 hover:text-red-700">
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </li>
);
