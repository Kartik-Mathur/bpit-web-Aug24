import { MongoClient } from 'mongodb';
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// // Database Name
const dbName = 'students';
let studentsDB;
// let person;
async function main() {
    await client.connect();
    // console.log('Connected successfully to server');
    studentsDB = await client.db(dbName);

    return 'done.';
}

function getDB() {
    if (studentsDB) return studentsDB;
    return null;
}

export { getDB };
export default main;