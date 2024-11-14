const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

let data = ["Avengers", "Ironman", "Hulk", "Thor"];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/getmovies', (req, res) => {
    res.send(data);
})

// SSR
app.get('/worstsite', (req, res) => {
    let htmlMovieData = '';
    let title = 'Movies List'
    data.forEach(d => {
        htmlMovieData += `<li>${d}</li>`
    })

    res.send(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>

        </head>
        <body>
            <h1>Movie List</h1>
            <ul id="movieList">
                ${htmlMovieData}
            </ul>
        </body>
        </html>
        `
    )
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});