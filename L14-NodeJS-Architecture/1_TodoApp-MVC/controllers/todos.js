const path = require('path');
const dbPath = path.join(__dirname,'..','db','tasks.json');
const fs = require('fs/promises');

module.exports.postAddTask = (req, res) => {
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
        path.join(dbPath), {
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
            path.join(dbPath),
            JSON.stringify(fileData)
        ).then(() => {
            res.send("Task added successfully");
        })
        .catch(err => {
            res.send("Unable to add task currently");
        })
    })
}






module.exports.getGetTasks = (req, res) => {
    // Let's read the tasks.json, kyunki saare tasks ussi ke andar hai
    fs.readFile(
        path.join(dbPath), {
        encoding: 'utf-8'
    }
    ).then((fileData) => {
        // Data ko string yaani json se object mei convert krna hoga
        fileData = JSON.parse(fileData);
        res.send(fileData);
    }).catch(err => {
        res.send("Unable to fetch all the tasks currently");
    })
}



module.exports.getGetActiveTasks = (req, res) => {
    // Let's read the tasks.json, kyunki saare tasks ussi ke andar hai
    fs.readFile(
        path.join(dbPath), {
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
}



module.exports.getGetCompletedTasks = (req, res) => {
    // Let's read the tasks.json, kyunki saare tasks ussi ke andar hai
    fs.readFile(
        path.join(dbPath), {
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
}


module.exports.getMarkComplete = async (req, res) => {
    let taskName = req.query.task;
    // console.log(taskName)

    try {
        let fileData = await fs.readFile(path.join(dbPath));
        fileData = JSON.parse(fileData);
        // console.log(fileData);
        fileData.forEach(item => {
            if (item.task === taskName) {
                item.completed = !item.completed;
            }
        })
        // console.log(fileData);

        await fs.writeFile(path.join(dbPath), JSON.stringify(fileData));
        res.send("Complete/Uncomplete mark success")
    } catch (err) {
        return res.send("Error to mark complete/uncomplete");
    }
}

module.exports.getMarkUncomplete=async (req, res) => {
    let taskName = req.query.task;
    // console.log(taskName)

    try {
        let fileData = await fs.readFile(path.join(dbPath));
        fileData = JSON.parse(fileData);
        // console.log(fileData);
        fileData.forEach(item => {
            if (item.task === taskName) {
                item.completed = !item.completed;
            }
        })
        // console.log(fileData);

        await fs.writeFile(path.join(dbPath), JSON.stringify(fileData));
        res.send("Complete/Uncomplete mark success")
    } catch (err) {
        return res.send("Error to mark complete/uncomplete");
    }
}



module.exports.getClearCompleted=async (req, res) => {
    try {
        let fileData = await fs.readFile(path.join(dbPath));
        fileData = JSON.parse(fileData);
        fileData = fileData.filter(item => {
            return item.completed === false
        });

        await fs.writeFile(path.join(dbPath), JSON.stringify(fileData));
        res.send({
            msg: 'Clear all done tasks completed successfully',
            data: fileData
        })
    }
    catch (err) {
        res.send("Unable to clear completed tasks");
    }
}


module.exports.getDeleteTask=async (req, res) => {
    try {
        let { task } = req.query;
        let fileData = await fs.readFile(path.join(dbPath));
        fileData = JSON.parse(fileData);

        fileData = fileData.filter(item => {
            return item.task !== task
        })
        await fs.writeFile(path.join(dbPath), JSON.stringify(fileData));
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
}


module.exports.getUpdateTask=async (req, res) => {
    const { task, newtask } = req.query;
    try {
        let fileData = await fs.readFile(path.join(dbPath));
        fileData = JSON.parse(fileData);

        fileData.forEach(item => {
            if(item.task === task){
                item.task = newtask;
            }
        })

        await fs.writeFile(path.join(dbPath), JSON.stringify(fileData));
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
}