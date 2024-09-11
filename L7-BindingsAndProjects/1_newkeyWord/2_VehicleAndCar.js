function Vehicle(company) {
    this.company = company;
}

function Car(name, topSpeed, type) {
    this.name = name;
    this.topSpeed = topSpeed;
    this.type = type;
}

function Bike(name, type) {
    this.name = name
    this.type = type
}

console.log(Bike.__proto__ == Function.prototype)
console.log(Car.prototype.constructor == Car) 
console.log(Car.prototype.__proto__ == Object.prototype);