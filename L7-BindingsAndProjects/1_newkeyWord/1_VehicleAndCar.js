function Vehicle(name, company) {
    this.name = name;
    this.company = company;
}

let v =  new Vehicle("Car","Maruti");

console.log(v);
console.log(v.__proto__ == Vehicle.prototype)
console.log(Vehicle.prototype.__proto__ == Function.prototype)
console.log(Vehicle.__proto__ == Function.prototype)