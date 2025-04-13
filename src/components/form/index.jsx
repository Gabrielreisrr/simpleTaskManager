import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form
      action="#"
      className="shadow-2xl p-4 bg-white rounded-md text-black flex items-center justify-between gap-2"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        type="text"
        placeholder="Digite uma nova tarefa"
        value={newTask}
        className="border-2 border-red-300 rounded-md p-2 text-black"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
        <FaPlus className="text-white" />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
