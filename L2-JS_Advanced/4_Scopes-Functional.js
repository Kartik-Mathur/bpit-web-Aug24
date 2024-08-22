// x is created inside hello
function hello() {
    var x =  10;
    console.log("x:", x);
}

hello();
// this will give us an error  since x is defined inside hello
console.log(x); 