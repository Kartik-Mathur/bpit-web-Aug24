const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/info', (req, res) => {
    res.send({
        name: 'John Keller',
        age: 30
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});