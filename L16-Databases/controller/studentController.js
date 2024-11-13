import { getDB } from "../database/mongodb-config.js";

const postAdd = async (req, res) => {
    const { name, college, marks } = req.body;
    const db = getDB();
    const person = db.collection('Person');
    let data = await person.insertOne({
        name,
        college,
        marks: +marks
    })
    console.log(data);
    res.send({
        "msg": 'Person added',
        data
    })
}

const getRead = async (req, res) => {
    const db = getDB();
    const person = db.collection('Person');
    let data = await person.find({}).toArray();
    console.log(data);
    res.send({
        msg: 'Retrieved Successfully',
        data
    })
}

const getReadRange = async (req, res) => {
    const db = getDB();
    const person = db.collection('Person');
    const { min, max } = req.query;
    console.log(min, max);
    let data = await person.find({
        $and: [
            { marks: { $gte: +min } },
            { marks: { $lte: +max } }
        ]
    }).toArray();

    console.log("Data",data);
    res.send({
        msg: 'Retrieved Successfully',
        data
    })
}

const getUpdate = async (req, res) => {
    const db = getDB();
    const { name, college, marks, oldName } = req.query;
    const person = db.collection('Person');
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

}

export {
    postAdd,
    getRead,
    getReadRange,
    getUpdate
}