const { writeFile } = require('node:fs/promises');
// const {Buffer}=require('node:buffer')

let filePath = __dirname+'/'+'database/message.txt';
// console.log(filePath);
async function writeData(msg) {
    try {
        await writeFile(filePath, msg);
        console.log("done")
    } catch (error) {
        console.log("Error in writing file");
    }
}

// writeFile(fileName,str)
// .then(()=>{
//     console.log("success");
// })
// .catch(()=>{
//     console.log("error");
// })

writeData("Hello World");

console.log("other")