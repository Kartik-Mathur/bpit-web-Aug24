const express = require('express');
const app = express();
const PORT = 4444;

// 1. Generic Middleware
app.use((req, res, next) => {
    console.log("I'm a generic middleware");
    const { name } = req.query;
    next();
    // if (name === 'abc') {
    //     next();// Only when this will run mei is middleware ke aage jaa paunga
    // }
    // else {
    //     console.log("Sending Not Authorised Response");
    //     res.send('Not authorised');
    // }
})

app.use((req, res, next) => {
    console.log("I'm a generic middleware-2");
    next();
})


// 2. Path starting match middleware
app.use('/greetings', (req, res, next) => {
    console.log("I'm a path starting match middleware");
    next();
})

// Exact Path match
app.get('/', (req, res) => {
    res.send('Welcome');
})

// Exact Path match and inline middleware
app.get('/greetings',
    (req, res, next) => {
        console.log("I am handling greetings get request");
        next();
    },
    (req, res) => {
        res.send('Hi! GoodAfternoon');
    })

// Exact Path match
app.get('/greetings/:name', (req, res) => {
    res.send(`Hi! GoodAfternoon ${req.params.name}`);
})


app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})