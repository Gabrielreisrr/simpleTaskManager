import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";

export default function Task({ task, removeTask, editTask }) {
  return (
    <ul>
      {task.map((item) => (
        <li
          key={item.id}
          className="text-black text-lg bg-gray-200 p-2 mb-2 rounded-md shadow-md flex items-center justify-between gap-2 hover:bg-gray-300"
        >
          {item.name}
          <div className="flex items-center justify-end gap-2">
            <button
              className="text-blue-500 hover:text-blue-700 p-1 rounded-md"
              onClick={() => editTask(item.id)}
            >
              <FaEdit />
            </button>
            <button
              className="text-red-500 hover:text-red-700 p-1 rounded-md"
              onClick={() => removeTask(item.id)}
            >
              <FaWindowClose />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

Task.propTypes = {
  task: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};
