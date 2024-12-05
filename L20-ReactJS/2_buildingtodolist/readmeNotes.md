
# Step-by-Step Guide to Building a Todo List Application in ReactJS

This guide provides an in-depth explanation of building a **Todo List Application** in ReactJS. Each function is explained step-by-step, leading to the complete application.

---

## **1. Setting Up the React Component**

### **Step 1: Initialize the Component**
Create a functional React component that will serve as the main Todo application. Start with the following:

```javascript
import React, { useState } from "react";

function TodoList() {
    return <div></div>;
}

export default TodoList;
```

---

## **2. Managing the State**

### **Step 2: Initialize State**
Use the `useState` hook to create two state variables:
1. `tasks`: An array to store all tasks.
2. `task`: A string to store the value of the input field.

```javascript
function TodoList() {
    const [tasks, setTasks] = useState([]); // State to hold the list of tasks
    const [task, setTask] = useState("");  // State to hold the current task input

    return <div></div>;
}
```

---

## **3. Adding Tasks**

### **Step 3: Create the `addTask` Function**
The `addTask` function:
1. Validates the input to ensure it’s not empty.
2. Adds a new task object to the `tasks` state.

```javascript
const addTask = () => {
    if (task.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: task, isCompleted: false }
    ]);

    setTask(""); // Clear the input field
};
```

### **Step 4: Add Input and Button for Adding Tasks**
Render an input field and a button to call `addTask`:

```javascript
return (
    <div>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
    </div>
);
```

---

## **4. Displaying the List of Tasks**

### **Step 5: Render Tasks Dynamically**
Use the `.map()` function to iterate over the `tasks` array and render each task.

```javascript
return (
    <div>
        {/* Render the list of tasks */}
        <ul>
            {tasks.map((t) => (
                <li key={t.id}>
                    {t.text}
                </li>
            ))}
        </ul>
    </div>
);
```

---

## **5. Removing Tasks**

### **Step 6: Create the `removeTask` Function**
The `removeTask` function:
1. Filters out the task with the specified `id` from the `tasks` array.

```javascript
const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
};
```

### **Step 7: Add a Remove Button**
Add a "Remove" button to each task in the rendered list. Call `removeTask` when the button is clicked.

```javascript
<ul>
    {tasks.map((t) => (
        <li key={t.id}>
            {t.text}
            <button onClick={() => removeTask(t.id)}>Remove</button>
        </li>
    ))}
</ul>
```

---

## **6. Toggling Task Completion**

### **Step 8: Create the `toggleCompletion` Function**
The `toggleCompletion` function:
1. Toggles the `isCompleted` property of a specific task.

```javascript
const toggleCompletion = (taskId) => {
    setTasks((prevTasks) =>
        prevTasks.map((t) =>
            t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t
        )
    );
};
```

### **Step 9: Apply Conditional Styling**
Modify the task’s text style based on its `isCompleted` status.

```javascript
<ul>
    {tasks.map((t) => (
        <li
            key={t.id}
            style={{
                textDecoration: t.isCompleted ? "line-through" : "none"
            }}
            onClick={() => toggleCompletion(t.id)}
        >
            {t.text}
            <button onClick={() => removeTask(t.id)}>Remove</button>
        </li>
    ))}
</ul>
```

---

## **7. Combining Everything**

### **Final Component**
Here’s the complete Todo List component:

```javascript
import React, { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }

        setTasks((prevTasks) => [
            ...prevTasks,
            { id: Date.now(), text: task, isCompleted: false }
        ]);

        setTask("");
    };

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
    };

    const toggleCompletion = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((t) =>
                t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t
            )
        );
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((t) => (
                    <li
                        key={t.id}
                        style={{
                            textDecoration: t.isCompleted ? "line-through" : "none"
                        }}
                        onClick={() => toggleCompletion(t.id)}
                    >
                        {t.text}
                        <button onClick={() => removeTask(t.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
```

---

## **Conclusion**

This Todo List application demonstrates:
- **State Management** with `useState`.
- **Dynamic Rendering** using `.map()`.
- **Event Handling** for adding, removing, and toggling tasks.

---
---
---
---
---
---
---
---


# Todo List Application: Two way flow understanding

## Overview
This is a React-based Todo List application that demonstrates **two-way data flow** between parent and child components. The application allows users to add tasks to a list and remove tasks from the list dynamically.

## Features
- **Add Tasks**: Adds a new task to the list.
- **Remove Tasks**: Removes a task from the list.
- **Two-Way Data Flow**: Demonstrates how a child component communicates with the parent component to update the state.

## Code Explanation

### Parent Component: TodoList

```javascript
import React, { useState } from "react";

const TodoList = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([
    { title: "CPP", description: "Learning CPP", id: 1 },
    { title: "Java", description: "Learning Java", id: 2 },
  ]);

  // Function to add a new task
  function addTodo() {
    let newTask = {
      title: "Python",
      description: "Learning Python",
      id: new Date(), // Unique ID based on timestamp
    };
    setTasks([newTask, ...tasks]); // Updates the state with the new task
  }

  // Function to remove a task based on its ID, and child is going to call this removeTask function, so flow of data from child to parent
  function removeTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Filters out the task with the given ID
  }

  return (
    <div>
      <div className="input">
        <h1>Todo Application</h1>
        <input type="text" id="title" placeholder="Enter task title" />
        <input type="text" id="description" placeholder="Enter task description" />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
            // These are passed as props to the child therefore data flow from parent to child
          <Todo key={task.id} t={task} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
};
```

### Child Component: Todo

```javascript
function Todo(props) {
  // Destructure props to extract task data and removeTask function
  const { t, removeTask } = props;

  return (
    <li className={t.id}>
      <div>{t.title}</div>
      <div>{t.description}</div>
      {/* Button to remove the task by calling the parent function removeTask */}
      <button onClick={() => removeTask(t.id)}>Remove Task</button>
    </li>
  );
}

export default TodoList;
```

## Key Concepts

1. **Parent to Child Data Flow**: The `TodoList` component passes task data (`t`) and the `removeTask` function as props to the `Todo` child component.
2. **Child to Parent Communication**: The `Todo` component calls `removeTask`, sending the task ID back to the parent.
3. **State Management**: The `TodoList` component updates the state when a task is added or removed, ensuring the list is always up-to-date.



