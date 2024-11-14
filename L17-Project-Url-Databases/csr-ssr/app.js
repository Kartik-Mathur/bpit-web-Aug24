const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.set('view engine', 'hbs');
// app.set('views', 'myviews');
app.use(express.urlencoded({ extended: true }));

let data = ["Avengers", "Ironman", "Hulk", "Thor"];

app.get('/moviesite', (req, res) => {
    res.render('index', {
        title: "Movie List",
        movielist: data
    });
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});