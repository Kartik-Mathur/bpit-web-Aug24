document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const clearCompletedButton = document.getElementById('clear-completed');

    taskForm.addEventListener('submit', addTask);

    function addTask(ev) {
        // Form ka default behaviour is to send request via browser
        // that means page refresh hoga, to stop it we use
        // preventDefault(): Default behaviour ko rokk deta hai
        ev.preventDefault();
        // This function will send POST request at '/addtask'
        // with key as "taskName"
        let data = taskInput.value.trim();
        // if data is not present we should not send post request
        if (data) {
            axios.post('/addtask', {
                taskName: data
            }).then((msg) => {
                // alert(msg.data);
                // If task is addedd successfully, then we need to get all the tasks
                // from backend so that we can show it to the user
                axios.get('/gettasks')
                    .then(({ data }) => {
                        console.log(data);
                        // Agar saare tasks aa gaye we need to add them to taskList
                        updateTaskList(data);
                    }).catch(err => {
                        console.log(err);
                    })
                // console.log(msg);
            }).catch(err => {
                alert(err);
            })
        }
    }

    function updateTaskList(data) {
        // Pehle taskList ko empty
        taskList.innerText = '';

        // data array par iterate karo
        data.forEach((task, indx) => {
            const li = document.createElement('li');
            li.innerHTML = `
            <span class="task-text">${task.task}</span>
            <div class="task-actions">
                <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
            `;
            li.className = `task-item ${task.completed ? 'completed' : ''}`;

            taskList.appendChild(li);

            li.querySelector('.complete-btn').addEventListener('click', (ev) => {
                let currentLi = ev.target;
                if (currentLi.innerText === 'Complete') {
                    // Yeh function '/markcomplete' par request bhej dega with taskName
                    axios.get(`/markcomplete?task=${task.task}`)
                        .then(({ msg }) => {
                            currentLi.innerText = 'Undo';
                            li.classList.add('completed');
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
                else {
                    axios.get(`/markuncomplete?task=${task.task}`)
                        .then(({ msg }) => {
                            currentLi.innerText = 'Complete';
                            li.classList.remove('completed');

                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })



            li.querySelector('.delete-btn').addEventListener('click', (ev) => {
                let currentLi = ev.target;
                axios.get(`/deletetask?task=${task.task}`)
                    .then((data) => {
                        currentLi.parentElement.parentElement.remove();
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })

            li.querySelector('.edit-btn').addEventListener('click', (ev) => {
                let span = li.firstElementChild;
                // Merko span ki jagah ek input element daalna padega so that user can change the value of
                // text
                const input = document.createElement('input');
                input.type = 'text';
                input.value = li.firstElementChild.innerText;
                li.replaceChild(input, span);
                input.focus();

                input.addEventListener('blur', (ev) => {
                    let updatedTaskValue = input.value.trim();
                    // console.log(updatedTaskValue);
                    if (updatedTaskValue) {
                        // tasks[indx].text = updatedTaskValue;
                        axios.get(`/updatetask?task=${task.task}&newtask=${updatedTaskValue}`)
                            .then((msg) => {
                                console.log(msg);
                                span.innerText = updatedTaskValue;
                                li.replaceChild(span, input);
                            })
                            .catch(err => {
                                alert(er.message);
                            })
                    }
                })

            })
        });
    }


    clearCompletedButton.addEventListener('click', () => {
        axios.get('/clearcompleted')
            .then(({ data }) => {
                taskList.innerHTML = '';
                updateTaskList(data.data);
                // console.log(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    })


    document.querySelector('.filter-buttons').addEventListener('click', (ev) => {
        // console.log(ev.target);
        const id = ev.target.getAttribute('id');
        const taskStatus = id.split('-').pop();

        filterButtons.forEach((item) => {
            const currentId = item.getAttribute('id');
            const currentStatus = currentId.split('-').pop();
            if (taskStatus === currentStatus) {
                item.classList.add('active');
            }
            else {
                item.classList.remove('active');
            }
        })

        if (taskStatus === 'all') {
            axios.get('/gettasks')
                .then(({ data }) => {
                    updateTaskList(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else if (taskStatus === 'active') {
            axios.get('/getactivetasks')
                .then(({ data }) => {
                    updateTaskList(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else if (taskStatus === 'completed') {
            axios.get('/getcompletedtasks')
                .then(({ data }) => {
                    updateTaskList(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    })



    function initialLoad() {
        axios.get('/gettasks')
            .then(({ data }) => {
                console.log(data);
                // Agar saare tasks aa gaye we need to add them to taskList
                updateTaskList(data);
            }).catch(err => {
                console.log(err);
            })
    }

    // Update taskList with the initial tasks
    initialLoad();




})



/*
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const clearCompletedButton = document.getElementById('clear-completed');

    taskForm.addEventListener('submit', addTask);
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTask(newTasks = tasks) {
        // Clear the entire taskList
        taskList.innerHTML = '';

        // Add all the tasks present inside the tasks array to taskList
        newTasks.forEach((task, indx) => {
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

            const completeBtn = li.querySelector('.complete-btn');
            const editBtn = li.querySelector('.edit-btn');
            const deleteBtn = li.querySelector('.delete-btn');

            completeBtn.addEventListener('click', (ev) => completeTask(indx));
            deleteBtn.addEventListener('click', (ev) => deleteTask(indx));
            editBtn.addEventListener('click', (ev) => editTask(li, indx));
        })
    }

    // Edit Task
    function editTask(li, indx) {
        let span = li.firstElementChild;
        // Merko span ki jagah ek input element daalna padega so that user can change the value of
        // text
        const input = document.createElement('input');
        input.type = 'text';
        input.value = li.firstElementChild.innerText;
        li.replaceChild(input, span);
        input.focus();

        input.addEventListener('blur', (ev) => {
            let updatedTaskValue = input.value.trim();
            console.log(updatedTaskValue);
            if (updatedTaskValue) {
                tasks[indx].text = updatedTaskValue;
            }
            saveTask();
            renderTask();
        })
    }

    function completeTask(indx) {
        tasks[indx].completed = !tasks[indx].completed;
        saveTask();
        renderTask();
    }

    function deleteTask(indx) {
        tasks.splice(indx, 1);
        saveTask();
        renderTask();
    }

    function saveTask() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTask(e) {
        e.preventDefault(); // This will prevent the page from getting refreshed
        const task = taskInput.value.trim();
        if (task) {
            tasks.push({
                text: task,
                completed: false
            });

            saveTask();
            renderTask();
        }
    }

    // Clear completed functionality
    function clearCompleted() {
        tasks = tasks.filter(task => !task.completed);
        saveTask();
        renderTask();
    }

    clearCompletedButton.addEventListener('click', clearCompleted);


    // Filter tasks functionality
    document.querySelector('.filter-buttons').addEventListener('click', (ev) => {
        // console.log(ev.target);
        const id = ev.target.getAttribute('id');
        const taskStatus = id.split('-').pop();

        filterButtons.forEach((item) => {
            const currentId = item.getAttribute('id');
            const currentStatus = currentId.split('-').pop();
            if (taskStatus === currentStatus) {
                item.classList.add('active');
            }
            else {
                item.classList.remove('active');
            }
        })

        if (taskStatus === 'all') {
            renderTask();
        }
        else if (taskStatus === 'active') {
            let myTasks = tasks.filter(t => t.completed === false);
            renderTask(myTasks);
        }
        else if (taskStatus === 'completed') {
            let myTasks = tasks.filter(t => t.completed === true);
            renderTask(myTasks);
        }
    })

    // Starting mei renderTask ka call hona jarrori  hai taaki,
    // localStorage ke tasks load  ho jaaye frontEnd par
    renderTask();
})


axios.get('/info')
    .then(res => {
        const {data}=res;
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })

*/