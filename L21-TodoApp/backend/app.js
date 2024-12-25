const path = require('path');
const express = require('express');
const Todo = require('./db/Todo.model');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 4444;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

// {name, description, completed}
app.post('/todo', async (req, res) => {

    const { name, description } = req.body;
    console.log(name, description);
    if (!name || !description) return res.status(400).json({
        msg: "Please provide name/description both"
    });

    try {
        await Todo.create({ name, description });
        res.status(200).json({
            msg: "Todo insert success"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        })
    }
})

app.get('/todos', async (req, res) => {
    try {
        let todos = await Todo.find({});
        res.status(200).json({
            todos
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        })
    }
})

app.put('/completed', async (req, res) => {
    const { id } = req.body;

    try {
        let todo = await Todo.findOne({ _id: id });
        todo.completed = !todo.completed;
        await todo.save();

        res.status(200).json({
            msg: "Completed toggle success"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        })
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/todo')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    }).catch(err => {
        console.log(err);
    })
