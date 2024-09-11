function Vehicle(company, name) {
    this.company = company;
    this.name = name;
}

function Car(name, topSpeed, type) {
    this.topSpeed = topSpeed;
    this.type = type;
}

function Bike(name, type) {
    Vehicle.call(this, "Maruti", name);
    this.type = type
}

Vehicle.prototype.getCompanyName = function () {
    return this.company;
}

// Correcting the chaining
Car.prototype = Object.create(Vehicle.prototype);
Bike.prototype = Object.create(Vehicle.prototype);
let Bullet = new Bike("Bullet","petrol");
console.log(Bullet);
console.log(Bullet.getCompanyName());