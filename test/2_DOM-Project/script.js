document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const clearCompletedButton = document.getElementById('clear-completed');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks(filteredTasks = tasks) {
        taskList.innerHTML = '';
        filteredTasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            const completeBtn = li.querySelector('.complete-btn');
            const editBtn = li.querySelector('.edit-btn');
            const deleteBtn = li.querySelector('.delete-btn');

            completeBtn.addEventListener('click', () => toggleComplete(index));
            editBtn.addEventListener('click', () => editTask(index, li));
            deleteBtn.addEventListener('click', () => deleteTask(index));

            taskList.appendChild(li);
        });
    }

    function addTask(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push({ text: taskText, completed: false });
            saveTasks();
            renderTasks();
            taskInput.value = '';
        }
    }

    function toggleComplete(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    }

    function editTask(index, li) {
        const taskText = li.querySelector('.task-text');
        const currentText = taskText.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        li.replaceChild(input, taskText);
        input.focus();

        input.addEventListener('blur', function() {
            const newText = this.value.trim();
            if (newText && newText !== currentText) {
                tasks[index].text = newText;
                saveTasks();
            }
            renderTasks();
        });

        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.blur();
            }
        });
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    function filterTasks(filter) {
        let filteredTasks;
        switch(filter) {
            case 'active':
                filteredTasks = tasks.filter(task => !task.completed);
                break;
            case 'completed':
                filteredTasks = tasks.filter(task => task.completed);
                break;
            default:
                filteredTasks = tasks;
        }
        renderTasks(filteredTasks);
    }

    function clearCompleted() {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        renderTasks();
    }

    taskForm.addEventListener('submit', addTask);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterTasks(button.id.split('-')[1]);
        });
    });

    clearCompletedButton.addEventListener('click', clearCompleted);

    renderTasks();
});