const { unlink } = require('node:fs');

let filePath = __dirname + '/' + 'database/message.txt';
unlink(filePath,(err)=>{
    if(err) return console.log(err);
    
    console.log("Done");
})