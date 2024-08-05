import "./FormAddTodo.css";
import { useRef } from "react";

const FormAddTodo = ({ addTodo }) => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim().length > 0) {
      addTodo(inputRef.current.value);
    }
    inputRef.current.value = "";
  };
  return (
    <form id="form-add-todo" onSubmit={handleSubmit}>
      <div className="form-field-container">
        <input
          type="text"
          ref={inputRef}
          id="form-add-todo-task"
          defaultValue=""
          placeholder="Add your task"
        />
      </div>
      <button type="submit" className="main-button">
        Add
      </button>
    </form>
  );
};

export default FormAddTodo;
