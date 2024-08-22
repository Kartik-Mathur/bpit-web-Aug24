// Loose Equality (==)
// Strict Equality (===)
let a = 10;
console.log("a == 10 :", a == 10);
// Incase of Loose equality typeconversion takes place
console.log("a == 10 :", a == "10");

// Incase of strict equality type and value both will be compared
console.log("a === 10 :", a === "10");

// Arrays
let arr = [1, 2, 3, 4];
let arr1 = [1, 2, 3, 4];

let arr2 = arr;

console.log("arr == arr1 :", arr == arr1);
console.log("arr == arr2 :", arr == arr2);
console.log(arr);