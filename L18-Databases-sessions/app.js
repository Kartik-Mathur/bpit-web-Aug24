import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import authorRoute from './routes/author-route.js';
import bookRoute from './routes/book-route.js';

const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(path.resolve(), 'public')));

app.use('/author',authorRoute);
app.use('/book',bookRoute);

mongoose
    .connect('mongodb://localhost:27017')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    }).catch(err => {
        console.log(err)
    })
