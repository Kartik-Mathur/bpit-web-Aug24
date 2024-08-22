let arr = [1,2,3,4,5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Arrays are heterogenous
let a = [1,2,"Hello",true,10.11];
console.log(a);
// Arrays are actually linkedlist
// Insertion at end: push
a.push("Coding");
console.log(a);

// Insertion at start: unshift
a.unshift(-100);
console.log(a);

// Deletion at start
a.shift();
console.log(a);

// Deletion at end
a.pop();
console.log(a);

// Insertion at random index
a[10] = "Harry";
console.log(a);
