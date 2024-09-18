document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const clearCompletedButton = document.getElementById('clear-completed');

    taskForm.addEventListener('submit',addTask);
    let tasks = [];

    function addTask(e){
        e.preventDefault(); // This will prevent the page from getting refreshed
        const task = taskInput.value.trim();
        if(task){
            tasks.push({
                text: task,
                completed: false
            });

            renderTask();
        }
    }


})