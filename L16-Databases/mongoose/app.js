import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import router from './router/router.js';

const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(path.resolve(), 'public')));

app.use('/',router);

mongoose.connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    }).catch(err => {
        console.log("Issues connecting to database", err);
    })
