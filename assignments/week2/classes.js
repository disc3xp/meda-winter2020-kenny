// 11/5/020
// classes are blueprint for am object

//Ex: 2 cars object:
let car1 = {
    "make": "Honda",
    "year": 1998,
    "model": "Civic"
};

let car2 = {
    "year": 2020,
    "model": "Accord"
};

let car5 = {
    "year": 2088,
    "model": "Mustang"
};


//class is like a factory;
//how to create a class definition / syntax of a class
class Car  {      // Capitalize (Car) making it to become a class!!!!!! (green color)
    constructor(make, model, year) {  //constructor is  (I need to provide these values)

        if (year > 2021) {
            console.log("Are you sure about the year for " + make + model + "? It seems to be awefully high!");
            this.year = NaN;
        } else {
            this.year = year;
        }

        this.make = make; //properties here, they are having ;
        this.model = model;
        this.currentFuelGallons = 0; //adding another property here, 0 gallons from start
        this.fuelCapacity = 15; //making every ca, having a max capacity of 15 gallons
        this.registeredDate = new Date(Date.now());    // only 1 function here ; new is also a Class here within the script
    }

    // adding methods
    checkFuel() {   // a function here, how much gas it has
        console.log(`The car ${this.make} ${this.model} has ${this.currentFuelGallons} gallons of gas left in the tank.`);
    }

    refuel(gallons) {
        if (typeof gallons === "number") {

            if (gallons > this.fuelCapacity - this.currentFuelGallons) { //adding this statement now
                console.log("There is not enough room in the tank for that many gallons! Topping off the tank instead.")
            this.currentFuelGallons = this.fuelCapacity;
            gallons = this.fuelCapacity;
        } else {
            this.currentFuelGallons = this.currentFuelGallons + gallons;
        }



            console.log("Refuel successfully, added " + gallons + " to the tank.");
        } else {
            console.log("Refueling needs a valid number!");
        }
    }
}


let car3 = new Car("Tesla", "X", 2016);
let car4 = new Car("Chevy", "Bolt", 2016);
let car6 = new Car("Voltswagen", "Golf II", 2099);

car3.checkFuel();  //acts like console.log in Git Bash
car4.checkFuel();

car4.refuel(400);
car4.checkFuel();

console.log("The car" + car4.make + car4.model + "has" + car4.currentFuelGallons + "gallons of gas left.");  // not effect console.log....
// console.log(car1, car2);
// console.log(car3, car4);


