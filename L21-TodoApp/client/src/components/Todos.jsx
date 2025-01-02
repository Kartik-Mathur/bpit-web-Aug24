import React, { useEffect, useState } from "react";

// let todos = [
//     {name: 'Cricket',description: 'Hello World', completed: false},
//     {name: 'Hockey',description: 'Hello Hello', completed: true},
//     {name: 'Singing',description: 'World World', completed: true},
//     {name: 'Dancing',description: 'Hello-World', completed: false},
// ]

const Todos = ({todos}) => {
  
  return (
    <div>
      {todos.map((t, indx) => {
        return (
          <div
            style={{
              display: "flex",
              padding: "10px",
              justifyContent: "space-around",
            }}
            key={indx}
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
