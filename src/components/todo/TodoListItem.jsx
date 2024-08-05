import "./TodoListItem.css";
import iconTrash from "../../assets/icons/trash.svg";
import iconCheck from "../../assets/icons/check-lg.svg";

const TodoListItem = ({
  todoTitle,
  todoCompleted,
  deleteTodo,
  handleComplete,
}) => {
  const handleClick = () => {
    handleComplete(todoTitle);
  };
  const handleDelete = () => {
    deleteTodo(todoTitle);
  };
  return (
    <div
      className={todoCompleted ? "todo-list-item completed" : "todo-list-item"}
    >
      <div className="tli-text" onClick={handleClick}>
        <span>
          <img src={iconCheck} alt="" />
        </span>
        <p>{todoTitle}</p>
      </div>
      <img
        src={iconTrash}
        className="delete-todo"
        onClick={handleDelete}
        alt="Delete"
      />
    </div>
  );
};

export default TodoListItem;
