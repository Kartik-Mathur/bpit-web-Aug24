import React, { useState } from "react";

// let todos = [
//     {name: 'Cricket',description: 'Hello World', completed: false},
//     {name: 'Hockey',description: 'Hello Hello', completed: true},
//     {name: 'Singing',description: 'World World', completed: true},
//     {name: 'Dancing',description: 'Hello-World', completed: false},
// ]

const Todos = () => {
  const [todos, setTodos] = useState([]);
  // useEffect()
  fetch("http://localhost:4444/todos")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      // setTodos(data);
    });

  return (
    <div>
      {todos.map((t) => {
        return (
          <div
            style={{
              display: "flex",
              padding: "10px",
              justifyContent: "space-around",
            }}
          >
            <h4>{t.name}</h4>
            <h6>{t.description}</h6>
            <button>
              {t.completed == true ? "Completed" : "Mark Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
