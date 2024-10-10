const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let todos = [];
// Will return the entire todos array
// app.get('/todos',)

// Will add an element to todos array
// app.post('/todos',)

// Will delete an element from todos array by name
// app.get('/delete-todo',)

// Will edit an element from todos array by name
// app.get('/update-todo',)

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});