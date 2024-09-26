const { writeFile } = require('node:fs/promises');

let fileName = 'message.txt';
async function writeData(msg) {
    try {
        await writeFile(fileName, msg);
    } catch (error) {
        console.log("Error in writing file");
    }
}

writeData("Hello World");