let person = {
    name: "kartik",
    age: 25,
    " ": "Space is the Key",
    "":"Empty key ki value"
}

/*
console.log("Name", person.name);
console.log("Age", person.age);
*/
// Error dega
// console.log("Age", person.' ');


// console.log("Name", person['name']);
// console.log('Age', person['age']);
// console.log(' ', person[' ']);
console.log(typeof(person));

for(let key in person){
    console.log(key, person[key]);
}