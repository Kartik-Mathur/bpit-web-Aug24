import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/add', async (req, res) => {
    const { name, college, marks } = req.body;
    let data = await person.insertOne({
        name,
        college,
        marks
    })
    console.log(data);
    res.send({
        "msg": 'Person added',
        data
    })
})

app.get('/read', async (req, res) => {
    let data = await person.find({}).toArray();
    console.log(data);
    res.send({
        msg: 'Retrieved Successfully',
        data
    })
})

app.get('/read-range', async (req, res) => {
    const { min, max } = req.query;
    console.log(min, max);
    let data = await person.find({
        $and: [
            { marks: { $gte: +min } },
            { marks: { $lte: +max } }
        ]
    }).toArray();

    console.log(data);
    res.send({
        msg: 'Retrieved Successfully',
        data
    })
})

app.get('/update', async (req, res) => {
    const { name, college, marks, oldName } = req.query;

    await person.updateOne(
        {
            name: oldName
        },
        {
            $set:{
                name,
                college,
                marks
            }
        }
    );

    res.send({
        msg:'Update done'
    })

})


main()
    .then((msg) => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch(er => {
        console.log(er);
    })
