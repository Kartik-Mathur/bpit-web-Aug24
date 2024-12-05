
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

By following these steps, you can build an interactive Todo List and expand its functionality further!
