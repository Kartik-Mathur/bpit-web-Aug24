const path = require('path');
const express = require('express');
const exp = require('constants');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());// For axios ke data ko read krne ke liye middleware

let todos = ['dance', 'swim', 'sing'];

// Will return the entire todos array
app.get('/todos', (req, res) => {
    res.send(todos);
})

// Will add an element to todos array
app.post('/todos', (req, res) => {
    const { name } = req.body;
    console.log(name);
    todos.push(name);
    res.send(todos);
})

// Will delete an element from todos array by name
app.get('/delete-todo', (req, res) => {
    const { name } = req.query;
    todos = todos.filter(todo => todo !== name);
    res.send(todos);
})

// Will edit an element from todos array by name
app.get('/update-todo', (req, res) => {
    const { name, newName } = req.query;
    let indx = todos.indexOf(name);
    if (indx != -1) {
        todos[indx] = newName;
    }
    res.send(todos);
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});