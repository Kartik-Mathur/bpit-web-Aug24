const { unlink } = require('node:fs/promises');

let filePath = __dirname+'/'+'database/message.txt';
async function deleteFile(){
    try {
        await unlink(filePath);
        console.log("Delete Success");
    } catch (error) {
        console.log(error);
    }
}

deleteFile();