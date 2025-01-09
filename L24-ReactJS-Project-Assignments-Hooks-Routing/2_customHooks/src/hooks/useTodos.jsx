import axios from "axios";
import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
    axios.get(url).then(({ data }) => {
      setTodos(data);
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

  return {
    todos,
    onDelete,
    addNewTask,
    completedCount,
    notCompletedCount,
  };
};
