// Question:
/*
We want to create different categories:
1. Car
2. Truck
3. Auto

We are able to store information of all the cars, truck, auto seperately
We can do the following operations
1. CRUD on car/truck/auto name, maxspeed, company, price
2. Get the average price of all cars/truck/auto in respective categories
3. Get the total number of cars/truck/auto
4. Get the car/truck/auto with the highest speed
5. Get the car/truck/auto with the highest speed in a specific company
*/

function createVehicle(category) {
    let vehicles = [];

    return {
        addVehicle: (name, maxSpeed, company, price) => {
            vehicles.push({ name, maxSpeed, company, price });
        },
        getVehicles: () => {
            return vehicles;
        },
        getAveragePrice: () => {
            if (vehicles.length == 0) return 0;

            let totalPrice = 0;
            for (let i = 0; i < vehicles.length; i++) {
                totalPrice += vehicles[i].price;
            }
            return totalPrice / vehicles.length;
        },
        deleteVehicle: (name) => {
            let indx = -1;
            for (let i = 0; i < vehicles.length; i++) {
                if (vehicles[i].name == name) {
                    indx = i;
                    break;
                }
            }

            if (indx != -1) {
                vehicles.splice(indx, 1);
            }
            return vehicles;
        }
    }
}

const car = createVehicle("CAR");
car.addVehicle("Alto", 100, "Maruti", 1000000);
car.addVehicle("Nano", 80, "Tata", 2000000);
console.log(car.getVehicles());
console.log(car.getAveragePrice());


const truck = createVehicle("TRUCK");
truck.addVehicle("XYZ", 400, "TATA", 4000000);
truck.addVehicle("TUX", 500, "TATA", 5000000);
console.log(truck.getVehicles());
console.log(truck.getAveragePrice());
console.log(truck.deleteVehicle("TUX"));