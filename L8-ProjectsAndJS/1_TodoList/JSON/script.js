// JSON: JAVASCRIPT OBJECT NOTATION

let obj = {
    a:10,
    b:20,
    c:true,
    d:["Hello World","Coding","Learning JSON"]
}

let jsonObj=JSON.stringify(obj);
console.log(jsonObj);

let newObj = JSON.parse(jsonObj)
console.log(newObj)