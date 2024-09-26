const { readFile } = require('node:fs');

let filePath = __dirname + '/' + 'database/message.txt';
readFile(filePath, {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) return console.log(err);

    console.log(data);
})