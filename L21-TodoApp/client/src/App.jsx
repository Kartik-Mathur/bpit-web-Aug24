import React, { useEffect, useState } from "react";
import Todos from "./components/Todos";
import CreateTodo from "./components/CreateTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4444/todos")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.todos);
        setTodos(data.todos);
      });
  }, []);

  function updateTodo(name, description) {
    fetch("http://localhost:4444/todo", {
      method: "POST",
      body: JSON.stringify({
        name,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
          // console.log(data);
          setTodos(data.todos);
      });
  }

  return (
    <div>
      <CreateTodo updateTodo={updateTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
