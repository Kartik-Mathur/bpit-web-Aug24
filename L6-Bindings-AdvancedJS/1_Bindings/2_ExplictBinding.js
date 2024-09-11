function printDetails(city,course){
    console.log("Name",this.name);
    console.log("Age",this.age);
    console.log("College",this.college);
    console.log("City",city);
    console.log("Course",course);
}

let person1={
    name: 'Ishan',
    age: 18,
    college:"BPIT"
}

let person2={
    name: 'Chinmaya',
    age: 19,
    college:"GTBIT"
}

let person3={
    name: 'Reyanshi',
    age: 20,
    college:"BVP"
}

// printDetails.call(person1,"Delhi","Btech");
// console.log("")
// printDetails.apply(person2,["Delhi","Btech"]);

// const p3 = printDetails.bind(person3);
// p3("Delhi","Btech");

// const p3 = printDetails.bind(person3,"Delhi");
// p3("Btech");

const p3 = printDetails.bind(person3,"Delhi","Btech");
p3();