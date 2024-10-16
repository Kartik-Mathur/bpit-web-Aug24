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
        ).then(()=>{
            res.send("Task added successfully");
        })
        .catch(err=>{
            res.send("Unable to add task currently");
        })
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});