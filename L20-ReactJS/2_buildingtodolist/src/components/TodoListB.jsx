import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      title: "CPP",
      description: "Learning CPP",
      id: 1,
    },
    {
      title: "Java",
      description: "Learning Java",
      id: 2,
    },
  ]);

  function addTodo() {
    // console.log("Inside add Todo")
    let newTask = {
      title: "Python",
      description: "Learning Python",
      id: 3,
    };

    setTasks([newTask, ...tasks]);
  }

  return (
    <div>
      <div className="input">
        <h1>Todo Application</h1>
        <input type="text" id="title" placeholder="Enter task title" />
        <input
          type="text"
          id="description"
          placeholder="Enter task description"
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <ul>
        {tasks.map((t) => {
          return (
            <li key={t.id} className={t.id}>
              <div>{t.title}</div>
              <div>{t.description}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
