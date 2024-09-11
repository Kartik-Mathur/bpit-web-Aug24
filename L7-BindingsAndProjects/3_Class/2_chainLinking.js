class Vehicle {
    constructor(name) {
        this.name = name;
    }
}

class Car extends Vehicle{
    constructor(name,topSpeed){
        super(name);
        this.topSpeed = topSpeed;
    }
}

console.log(Car.prototype.__proto__ == Vehicle.prototype);
console.log(typeof Car);