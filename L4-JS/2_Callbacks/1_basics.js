function hello(cb){
    console.log("Hello");
    cb();  // Hello print hone ke baad jo function call kia that is 
    // callback function
}

function world(){
    console.log("World");
}

function printSum(){
    console.log(10+20);
}

hello(world);
hello(printSum);