let str = "Hello World Learning Strings";
console.log(str);

for(let i = 0 ; i < str.length ; i++){
    console.log(str[i]);
}

// Extract all words out of str
let arr = str.split(' ');
console.log(arr);
console.log(str);

// Combine all the words in an array
let newStr = arr.join('_');
console.log(newStr);

// Finding the index of a word in a string
let indx = str.indexOf("learning");
console.log(indx);