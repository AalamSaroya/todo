import "./App.css";
import FormAddTodo from "./components/form_add_todo/FormAddTodo";
import MainHeading from "./components/main_heading/MainHeading";
import TodoList from "./components/todo/TodoList";
import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoTitle) => {
    setTodos([...todos, { title: todoTitle, completed: false }]);
  };

  const handleComplete = (todoTitle) => {
    setTodos(
      todos.map((todo) => {
        if (todo.title === todoTitle) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (todoTitle) => {
    setTodos(
      todos.filter((todo) => {
        return todoTitle !== todo.title;
      })
    );
  };
  return (
    <div className="page-wrap">
      <MainHeading />
      <FormAddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
