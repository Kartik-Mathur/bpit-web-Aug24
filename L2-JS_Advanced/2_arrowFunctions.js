let a = () => {
    console.log("Inside an arrow function");
}
a();

let isEven = (number) => {
    return number % 2 == 0;
}

if (isEven(11)) console.log("Even")
else console.log("Odd");

// Arrow functions ke andar agar curly brackets nahi lagate,
// toh by default return hota hai
let add = (a, b) => a + b;
// console.log(typeof(add));
console.log(add(10,20));
// This is same as writing
// let add =(a,b)=>{
//     return a+b;
// }