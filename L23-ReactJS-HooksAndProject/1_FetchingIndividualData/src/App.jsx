import React, { useEffect, useState } from "react";
import axios from "axios";

const api_gettodos = "https://jsonplaceholder.typicode.com/todos";
const api_getTodoItem = (id) => `${api_gettodos}/${id}`;

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get(api_gettodos);
      console.log(data.slice(0, 10));
      setTodos(data.slice(0, 10));
    }

    getTodos();
  }, []);

  async function getTodoItem(id) {
    const { data } = await axios.get(api_getTodoItem(id));
    setTodos([data]);
  }

  return (
    <>
      <div>
        {Array(10)
          .fill()
          .map((_, index) => {
            return (
              <button key={index} onClick={() => getTodoItem(index + 1)}>
                {index + 1}
              </button>
            );
          })}
      </div>
      <div>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title}
            {/* <button>{index + 1}</button> */}
          </li>
        ))}
      </div>
    </>
  );
};

export default App;
