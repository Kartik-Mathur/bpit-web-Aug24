let college = {
    collegeName: "BPIT",
    address: "Sector-17 Rohini"
}

let student = {
    name: "Yash",
    age: 20
}

console.log(student.__proto__  == Object.prototype);
let newStudent = Object.create(college);
console.log(newStudent);
console.log(newStudent.collegeName);
console.log(newStudent.address);