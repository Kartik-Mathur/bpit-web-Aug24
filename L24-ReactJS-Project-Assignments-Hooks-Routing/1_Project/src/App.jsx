import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import Analytics from "./components/Analytics";
import TaskList from "./components/TaskList";

const App = () => {
  // TODO: Define state for tasks
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
    axios.get(url).then(({ data }) => {
      setTodos(data);
      setLoading(false);
    });
  }, []);

  // TODO: Define handlers for adding, toggling, and deleting tasks
  const onDelete = useCallback((id) => {
    let newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  }, []);

  const addNewTask = useCallback(
    (task) => {
      console.log("Adding task", task);
      console.log(todos);
      setTodos([...todos, { id: todos.length, title: task, completed: true }]);
    },
    [todos]
  );

  let { completedCount, notCompletedCount } = useMemo(() => {
    let a = 0,
      b = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed) a++;
      else b++;
    }

    return { completedCount: a, notCompletedCount: b };
  }, [todos]);

  return (
    <div>
      <h1>Task Tracker</h1>

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <TaskList todos={todos} onDelete={onDelete} addNewTask={addNewTask} />
          <Analytics
            completedCount={completedCount}
            notCompletedCount={notCompletedCount}
          />
        </>
      )}
    </div>
  );
};

export default App;
