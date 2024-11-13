import express from 'express';
import path from 'path';

const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));

// Connection URL
import main from './database/mongodb-config.js';
import studentRouter from './router/studentRouter.js';

app.use('/', studentRouter);

main()
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch(er => {
        console.log(er);
    })
