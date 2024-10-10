const lib2 = require('./lib2.js');

console.log("Inside file-1")

let a = 10;
module.exports.a = a;
module.exports.lib2 = lib2;