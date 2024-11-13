import { getDB } from "../database/mongodb-config.js";

const postAdd = async (req, res) => {
    const { name, college, marks } = req.body;

    if(!name || !college || !marks){
        return res.status(400).json({
            msg:"Please provide all the infomation to add a new student"
        })
    }

    try {
        const db = getDB();
        const person = db.collection('Person');
        let data = await person.insertOne({
            name,
            college,
            marks: +marks
        })
        
        res.send({
            "msg": 'Person added',
            data
        })
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error while adding a new person",
            error
        })
    }
}

const getRead = async (req, res) => {
    try {
        const db = getDB();
        const person = db.collection('Person');
        let data = await person.find({}).toArray();
        console.log(data);
        res.send({
            msg: 'Retrieved Successfully',
            data
        })
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error unable to fetch all person",
            error
        })
    }
}

const getReadRange = async (req, res) => {
    const { min, max } = req.query;
    if(!min || !max){
        return res.status(400).json({
            msg:"Please provide both min and max for getting results"
        })
    }
    try {
        const db = getDB();
        const person = db.collection('Person');
        
        console.log(min, max);
        let data = await person.find({
            $and: [
                { marks: { $gte: +min } },
                { marks: { $lte: +max } }
            ]
        }).toArray();
    
        res.send({
            msg: 'Retrieved Successfully',
            data
        })
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error unable to fetch person in range",
            error
        })
    }
}

const getUpdate = async (req, res) => {
    const { name, college, marks, oldName } = req.query;
    if(!name || !college || !marks || !oldName){
        return res.status(400).json({
            msg:"Please provide all the information to update an entry"
        })
    }
    try {
        const db = getDB();
        
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
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error unable to update person",
            error
        })
    }

}

export {
    postAdd,
    getRead,
    getReadRange,
    getUpdate
}