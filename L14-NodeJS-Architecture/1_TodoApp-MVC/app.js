const path = require('path');
// const fs = require('fs/promises');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());  // axios ke data ko readable krne ke liye

// Routers
app.use('/',require('./routers/todos'));


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});