// '\t', ' ', '\n', 0, []
// Array bada datatype hai convert hoga int mei thus -> 0
console.log("0 == [] :", 0 == []); // true

// Integer mei convert krne ke liye we use + operator
console.log("+[] :", +[]); // 0

// [1]  number mei convert hoga that would be 1
console.log("0 == [1] :", 0 == [1]); // false

console.log("+[1] :", +[1]);

console.log("+[1,2] :", +[1, 2]);

console.log("+'' :", +'');

console.log("\\t == 0 :", '\t' == 0);
console.log("\\n == 0 :", '\n' == 0);
console.log("\\n == \\t :", '\n' == '\t');


console.log("0 == [] :", [] == 0);
console.log("\\t == 0 :", '\t' == 0);
console.log("\\t == [] :", '\t' == []);
// console.log("\\t == +[] :", '\t' == +[]);
