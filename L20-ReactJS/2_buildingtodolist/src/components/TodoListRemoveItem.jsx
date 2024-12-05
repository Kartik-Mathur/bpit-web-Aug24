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
      id: new Date(),
    };

    setTasks([newTask, ...tasks]);
  }

  function removeTask(id) {
    setTasks((prevTask) => {
      return prevTask.filter((t) => t.id !== id);
    });
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
          return <Todo key={t.id} t={t} removeTask={removeTask} />;
        })}
      </ul>
    </div>
  );
};

function Todo(props) {
  // const {t} = props;
  const { t, removeTask } = props;

  console.log("Inside Todo");
  return (
    <li className={t.id}>
      <div>{t.title}</div>
      <div>{t.description}</div>
      <button onClick={() => removeTask(t.id)}>Remove Task</button>
    </li>
  );
}

export default TodoList;
