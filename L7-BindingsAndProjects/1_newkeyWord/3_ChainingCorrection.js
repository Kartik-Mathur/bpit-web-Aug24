function Vehicle(company, name) {
    this.company = company;
    this.name = name;
}

function Car(name, topSpeed, type) {
    this.topSpeed = topSpeed;
    this.type = type;
}

function Bike(name, type) {
    this.type = type
}

console.log(Bike.__proto__ == Function.prototype)
console.log(Car.prototype.constructor == Car)
console.log(Car.prototype.__proto__ == Object.prototype);

// Correcting the chaining
Car.prototype = Object.create(Vehicle.prototype);
Bike.prototype = Object.create(Vehicle.prototype);
console.log(Car.prototype.__proto__ == Vehicle.prototype);
