const path = require('path');
const fs = require('fs/promises');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());  // axios ke data ko readable krne ke liye


app.post('/addtask', (req, res) => {
    // We assume body mei taskName key aaegi that we need to store
    const { taskName } = req.body;
    console.log(taskName)
    // Add taskName inside tasks.json using filehandling
    let data = {
        task: taskName,
        completed: false
    }
    // Pehle ek kaam karte hai lets read the entire tasks.json
    // For example: [{task:'Cricket',completed:false},{task:'Dance',completed:false}]
    fs.readFile(
        path.join(__dirname, 'tasks.json'), {
        encoding: 'utf-8'
    }
    ).then((fileData) => {
        // Data ko string yaani json se object mei convert krna hoga
        fileData = JSON.parse(fileData);
        // fileData=[{task:'Cricket',completed:false},{task:'Dance',completed:false}]
        // fileData is a JS object

        // Let's append newTask in it
        fileData.push(data);
        // fileData=[{task:'Cricket',completed:false},{task:'Dance',completed:false},{task:'Sing',completed:false}]

        // Let's write it back to tasks.json
        fs.writeFile(
            path.join(__dirname, 'tasks.json'),
            JSON.stringify(fileData)
        ).then(() => {
            res.send("Task added successfully");
        })
            .catch(err => {
                res.send("Unable to add task currently");
            })
    })
})


app.get('/gettasks', (req, res) => {
    // Let's read the tasks.json, kyunki saare tasks ussi ke andar hai
    fs.readFile(
        path.join(__dirname, 'tasks.json'), {
        encoding: 'utf-8'
    }
    ).then((fileData) => {
        // Data ko string yaani json se object mei convert krna hoga
        fileData = JSON.parse(fileData);
        res.send(fileData);
    }).catch(err => {
        res.send("Unable to fetch all the tasks currently");
    })
})

app.get('/getactivetasks', (req, res) => {
    // Let's read the tasks.json, kyunki saare tasks ussi ke andar hai
    fs.readFile(
        path.join(__dirname, 'tasks.json'), {
        encoding: 'utf-8'
    }
    ).then((fileData) => {
        // Data ko string yaani json se object mei convert krna hoga
        fileData = JSON.parse(fileData);
        // let's filter out the active tasks
        fileData = fileData.filter(item => {
            return item.completed === false
        })
        res.send(fileData);
    }).catch(err => {
        res.send("Unable to fetch all the tasks currently");
    })
})

app.get('/getcompletedtasks', (req, res) => {
    // Let's read the tasks.json, kyunki saare tasks ussi ke andar hai
    fs.readFile(
        path.join(__dirname, 'tasks.json'), {
        encoding: 'utf-8'
    }
    ).then((fileData) => {
        // Data ko string yaani json se object mei convert krna hoga
        fileData = JSON.parse(fileData);
        fileData = fileData.filter(item => {
            return item.completed === true
        })
        res.send(fileData);
    }).catch(err => {
        res.send("Unable to fetch all the tasks currently");
    })
})



app.get('/markcomplete', async (req, res) => {
    let taskName = req.query.task;
    // console.log(taskName)

    try {
        let fileData = await fs.readFile(path.join(__dirname, 'tasks.json'));
        fileData = JSON.parse(fileData);
        // console.log(fileData);
        fileData.forEach(item => {
            if (item.task === taskName) {
                item.completed = !item.completed;
            }
        })
        // console.log(fileData);

        await fs.writeFile(path.join(__dirname, 'tasks.json'), JSON.stringify(fileData));
        res.send("Complete/Uncomplete mark success")
    } catch (err) {
        return res.send("Error to mark complete/uncomplete");
    }
})

app.get('/markuncomplete', async (req, res) => {
    let taskName = req.query.task;
    // console.log(taskName)

    try {
        let fileData = await fs.readFile(path.join(__dirname, 'tasks.json'));
        fileData = JSON.parse(fileData);
        // console.log(fileData);
        fileData.forEach(item => {
            if (item.task === taskName) {
                item.completed = !item.completed;
            }
        })
        // console.log(fileData);

        await fs.writeFile(path.join(__dirname, 'tasks.json'), JSON.stringify(fileData));
        res.send("Complete/Uncomplete mark success")
    } catch (err) {
        return res.send("Error to mark complete/uncomplete");
    }
})


app.get('/clearcompleted', async (req, res) => {
    try {
        let fileData = await fs.readFile(path.join(__dirname, 'tasks.json'));
        fileData = JSON.parse(fileData);
        fileData = fileData.filter(item => {
            return item.completed === false
        });

        await fs.writeFile(path.join(__dirname, 'tasks.json'), JSON.stringify(fileData));
        res.send({
            msg: 'Clear all done tasks completed successfully',
            data: fileData
        })
    }
    catch (err) {
        res.send("Unable to clear completed tasks");
    }
})

app.get('/getactivetasks', async (req, res) => {
    try {
        let fileData = await fs.readFile(path.join(__dirname, 'tasks.json'));
        fileData = JSON.parse(fileData);
        fileData = fileData.filter(item => {
            return item.completed === false
        });
        res.send({
            msg: 'All active tasks fetched successfully',
            data: fileData
        })

    } catch (err) {
        res.send({
            msg: 'Not able to fetch active tasks',
            err: err
        })
    }
})


app.get('/deletetask', async (req, res) => {
    try {
        let { task } = req.query;
        let fileData = await fs.readFile(path.join(__dirname, 'tasks.json'));
        fileData = JSON.parse(fileData);

        fileData = fileData.filter(item => {
            return item.task !== task
        })
        await fs.writeFile(path.join(__dirname, 'tasks.json'), JSON.stringify(fileData));
        res.send({
            msg: 'Task deleted successfully',
            data: fileData
        })
    }
    catch (err) {
        res.send({
            msg: 'Unable to delete task currently',
            err
        })
    }
})


app.get('/updatetask', async (req, res) => {
    const { task, newtask } = req.query;
    try {
        let fileData = await fs.readFile(path.join(__dirname, 'tasks.json'));
        fileData = JSON.parse(fileData);

        fileData.forEach(item => {
            if(item.task === task){
                item.task = newtask;
            }
        })

        await fs.writeFile(path.join(__dirname, 'tasks.json'), JSON.stringify(fileData));
        res.send({
            msg: 'Task Edit successfull',
            data: fileData
        })
    }
    catch (err) {
        res.send({
            msg: 'Unable to Edit task currently',
            err
        })
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});