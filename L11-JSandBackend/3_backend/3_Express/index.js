const express = require('express');
const app = express();
const PORT = 4444;

// Middleware: To make post req data readable
app.use(express.urlencoded({extended: true}));

// PATH Handling
app.get('/', (req, res) => {
    console.log(req);
    res.send("<h1>Hello, Welcome to our App</h1>");
});

app.get('/hi', (req, res) => {
    res.send("Hey There!! Welcome");
})

// params: used to send data from client to server via URL
// http://localhost:4444/greet/tushar
app.get('/greet/:name', (req, res) => {
    // console.log(req.params);
    // const name = req.params.name;
    const {name} = req.params;
    res.send(`Good Afternoon,${name}`);
})

// Browser side: http://localhost:4444/greetings?name=tushar&age=21
// query parameters: used to send data from client to server via URL
app.get('/greetings',(req,res)=>{
    // console.log(req.query);
    const {name, age} = req.query;
    res.send(`Greetings to you, ${name} ${age}`)
})


// POST request
app.post('/add-item',(req,res)=>{
    // console.log(req.body);
    const {name,age,college, city}=req.body;
    res.send(`${name} ${age} ${college} ${city}`);
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
})
