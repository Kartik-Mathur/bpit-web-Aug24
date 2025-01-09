import React, { useCallback, useEffect, useMemo, useState } from "react";
import Analytics from "./components/Analytics";
import TaskList from "./components/TaskList";
import useTodos from "./hooks/useTodos";

const App = () => {
  const { todos, onDelete, addNewTask, completedCount, notCompletedCount } = useTodos();
  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskList todos={todos} onDelete={onDelete} addNewTask={addNewTask} />
      <Analytics
        completedCount={completedCount}
        notCompletedCount={notCompletedCount}
      />
    </div>
  );
};

export default App;

