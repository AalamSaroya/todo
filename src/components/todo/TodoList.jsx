import "./TodoList.css";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleComplete, deleteTodo }) => {
  const renderedTodos = todos.map((todo, index) => {
    return (
      <TodoListItem
        key={index + 1}
        todoTitle={todo.title}
        todoCompleted={todo.completed}
        handleComplete={handleComplete}
        deleteTodo={deleteTodo}
      />
    );
  });
  return <div className="todo-list">{renderedTodos}</div>;
};

export default TodoList;
