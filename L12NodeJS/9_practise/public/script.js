let taskList = document.querySelector('.taskList');
let btn = document.querySelector('.btn');
let inp = document.querySelector('.newTask');

function updateTaskList() {
    axios
        .get('/todos')
        .then(({ data }) => {
            console.log(data);
            taskList.innerText = '';

            data.forEach(item => {
                const task = document.createElement('li');
                task.textContent = item;
                taskList.appendChild(task);
            })

        })
        .catch(err => {
            console.log(err)
        })
}

updateTaskList();


btn.addEventListener('click',(ev)=>{
    let newTask = inp.value.trim();
    if(newTask){
        axios.post('/todos',{
            name: newTask
        })
        .then(({data})=>{
            // console.log(data);
            taskList.innerText = '';

            data.forEach(item => {
                const task = document.createElement('li');
                task.textContent = item;
                taskList.appendChild(task);
            })
        })
        .catch(err=>{
            alert(err.message);
        })
    }
})
