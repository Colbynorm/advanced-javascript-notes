class Vehicle { 
    constructor(wheels, topSpeed){
        this.wheels = wheels;
        this.topSpeed = topSpeed;
    }
}
const tricyle = new Vehicle(3, 20);
console.log(tricyle.wheels, tricyle.topSpeed);

class House { 
    constructor(address, floors = 1){
        this.address = address;
        this.floors = floors;
    }
    getFloors(){
        return this.floors;
    }
}
let myHouse = new House('123 Main St., Dallas TX', 10);
console.log(myHouse.getFloors());

class Car {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    setColor(color){
        this.color = color;
    }
}
let myCar = new Car('Nissan', 'Sentra', 2014, 'Grey');
myCar.setColor('Blue');
console.log(myCar);