const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
// On get request at '/' path, will automatically send the index.html file
app.use(express.static(path.join(__dirname,'public')));

// Will never work if there is index.html present inside public folder
app.get('/',(req,res)=>{
    res.send('I am here!');
})


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});