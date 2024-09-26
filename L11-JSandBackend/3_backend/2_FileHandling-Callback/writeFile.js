const { writeFile } = require('node:fs');

let filePath = __dirname + '/' + 'database/message.txt';
writeFile(filePath, "Hello World!!!!!!!!!", (err) => {
    if (err) return console.log(err);

    console.log("Done");
})