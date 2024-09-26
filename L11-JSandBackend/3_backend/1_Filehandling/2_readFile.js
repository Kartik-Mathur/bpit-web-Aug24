const { readFile } = require('node:fs/promises');

let filePath = __dirname+'/'+'database/message.txt';

async function readData() {
    try {
        // let data = await readFile(fileName);
        // console.log(data.toString());

        let data = await readFile(filePath, {
            encoding: 'utf-8',
            flag: 'r'
        });

        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

readData();