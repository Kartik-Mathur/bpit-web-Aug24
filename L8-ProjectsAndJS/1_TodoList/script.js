document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const clearCompletedButton = document.getElementById('clear-completed');

    taskForm.addEventListener('submit', addTask);
    let tasks = [];

    function renderTask() {
        // Clear the entire taskList
        taskList.innerHTML = '';

        // Add all the tasks present inside the tasks array to taskList
        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
            `;

            li.className = `task-item ${task.completed ? 'completed' : ''}`;

            taskList.appendChild(li);
        })
    }

    function addTask(e) {
        e.preventDefault(); // This will prevent the page from getting refreshed
        const task = taskInput.value.trim();
        if (task) {
            tasks.push({
                text: task,
                completed: false
            });

            renderTask();
        }
    }


})