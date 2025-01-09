import React, { useState } from "react";

const TaskList = ({ todos, onDelete, addNewTask }) => {
  const [taskName, setTaskName] = useState("");
  const deleteTodo = (id) => {
    onDelete(id);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <button onClick={() => addNewTask(taskName)}>Add Task</button>
      {todos.map((t, index) => (
        <div key={index}>
          <span style={t.completed ? { textDecoration: "line-through" } : {}}>
            {t.title}
          </span>{" "}
          <button onClick={deleteTodo}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default TaskList;
