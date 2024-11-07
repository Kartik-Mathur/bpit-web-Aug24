// import express from `'express';
const path = require('path');
// import path from 'path';
const express = require('express');
// import { MongoClient } from 'mongodb';
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// // Database Name
const dbName = 'students';
let studentsDB;
let person;
async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    studentsDB = client.db(dbName);
    person = studentsDB.collection('Person');

    return 'done.';
}

app.post('/add',async (req,res)=>{
    const {name, college, marks} = req.body;
    let data = await person.insertOne({
        name, 
        college, 
        marks
    })
    console.log(data);
    res.send({
        "msg":'Person added',
        data
    })
})

// app.get('/read',(req,res)=>{

// })


main()
    .then((msg) => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch(er => {
        console.log(er);
    })
