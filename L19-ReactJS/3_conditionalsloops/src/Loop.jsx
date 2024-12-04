import React from "react";
import { useState } from "react";

const Loop = () => {
  const tasks_init = [
    {
      taskName: "Learn ReactJs",
      description: "Fun with ReactJS",
      id: 1,
    },
    {
      taskName: "Learn CPP",
      description: "Fun with CPP",
      id: 2,
    },
  ];

  const [tasks,setTasks]= useState(tasks_init);
  
  const showTasks = () => {
    setTasks(tasks_init);
  };

  const hideTasks = () => {
    setTasks([]);
  };

  return (
    <div>
      <button onClick={showTasks}>Show Tasks</button>
      <button onClick={hideTasks}>Hide Tasks</button>
      {tasks.map((t, index) => {
        return (
          <div key={t.id} className="childElement">
            <div className="task">{t.taskName}</div>
            <div className="task-description">{t.description}</div>
            <button className="remove-task">❌</button>
          </div>
        );
      })}
    </div>
  );
};

export default Loop;
