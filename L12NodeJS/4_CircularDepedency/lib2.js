const lib1 = require('./lib1');
console.log("Inside file-2");

let b = 20;

module.exports.b = b;
module.exports.lib1 = lib1;
