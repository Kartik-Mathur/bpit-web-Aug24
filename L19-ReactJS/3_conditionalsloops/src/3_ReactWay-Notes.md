## ReactJS Way of Doing It

ReactJS simplifies the task management system by leveraging **components** and **state management**.

### ReactJS Code

```javascript
import React, { useState } from 'react';

function TaskManager() {
    const [tasks, setTasks] = useState([
        { title: "Learn React JS", description: 'Course by Coding blocks', id: 1 },
        { title: "Learn States in ReactJS", description: 'Course by Kartik', id: 2 }
    ]);

    const addTask = () => {
        const taskName = document.getElementById('taskName').value;
        const taskDesc = document.getElementById('description').value;

        if (taskName && taskDesc) {
            const newTask = {
                title: taskName,
                description: taskDesc,
                id: tasks.length + 1
            };
            setTasks([...tasks, newTask]); // Update state
        }
    };

    return (
        <div>
            <input type="text" id="taskName" placeholder="Enter a task" />
            <input type="text" id="description" placeholder="Enter a task-description" />
            <button onClick={addTask}>Add Task</button>

            <div id="container">
                {tasks.map(task => (
                    <div key={task.id}>
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                        <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))}>
                            ❌
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskManager;
```

### How It Works
1. **Component Structure**:
   - A single `TaskManager` component manages the entire logic and UI.

2. **State Management**:
   - React’s `useState` hook is used to manage the `tasks` array dynamically.

3. **Dynamic Rendering**:
   - Tasks are rendered using the `map` function, which updates automatically when the state changes.

4. **Adding and Removing Tasks**:
   - **Add Task**: New tasks are added by updating the state with the `setTasks` function.
   - **Delete Task**: Tasks are removed by filtering out the selected task from the state.

### Advantages of ReactJS
- **Declarative Approach**: React handles DOM updates automatically based on state changes.
- **Reusable Components**: The `TaskManager` component can be used and extended easily.
- **Scalability**: React’s component-based architecture makes it easier to manage larger applications.

---

## Key Takeaways

| Traditional JavaScript      | ReactJS                      |
|-----------------------------|------------------------------|
| Manual DOM manipulation     | Automatic DOM updates        |
| Prone to errors in scaling  | Component-based architecture |
| Limited reusability         | Highly reusable components   |
| Imperative programming      | Declarative programming      |

