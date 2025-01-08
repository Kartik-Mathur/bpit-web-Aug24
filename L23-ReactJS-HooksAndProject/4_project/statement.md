# Project File Structure with Installation Guide

Below is the structure for the project with function placeholders. Each file includes its necessary function declarations, but the implementation is not included. Follow this structure to build the application.

---

## Installation Guide

### Step 1: Create a New Project Using Vite
```bash
npm create vite@latest task-tracker --template react
cd task-tracker
npm install
```

### Step 2: Install Required Packages
The following packages are required for this project:

1. **Chart.js** and **React-Chartjs-2** for data visualization:
   ```bash
   npm install chart.js react-chartjs-2
   ```

2. **Optional:** Install any additional utility libraries if needed, like `classnames` or `axios` for extended functionality.

---

## File Structure

### src/main.jsx
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### src/App.js
```javascript
import React from "react";
import TaskList from "./components/TaskList";
import Analytics from "./components/Analytics";

const App = () => {
  // TODO: Define state for tasks
  // TODO: Define handlers for adding, toggling, and deleting tasks

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskList /* props */ />
      <Analytics /* props */ />
    </div>
  );
};

export default App;
```

---

### src/components/TaskList.js
```javascript
import React from "react";

const TaskList = ({ tasks, onToggle, onDelete, onAddTask }) => {
  // TODO: Render task list and provide functionality for adding, toggling, and deleting tasks

  return (
    <div>
      <h2>Task List</h2>
      {/* TODO: Render tasks */}
    </div>
  );
};

export default TaskList;
```

---

### src/components/Analytics.js
```javascript
import React from "react";

const Analytics = ({ tasks }) => {
  // TODO: Calculate analytics data and render the pie chart

  return (
    <div>
      <h2>Analytics</h2>
      {/* TODO: Render chart and analytics summary */}
    </div>
  );
};

export default Analytics;
```
