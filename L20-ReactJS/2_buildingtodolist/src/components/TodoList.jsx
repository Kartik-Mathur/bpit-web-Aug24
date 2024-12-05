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

  return (
    <ul>
      {tasks.map((t) => {
        return (
          <li className={t.id}>
            <div>{t.title}</div>
            <div>{t.description}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
