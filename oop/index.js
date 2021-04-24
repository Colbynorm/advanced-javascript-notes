// constructor function
const Person = function(firstName, birthYear) {
    console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;

    //dont do this
    // this.calcAge = function() {
    //     console.log(2021 - this.birthYear);
    // };
};

const colby = new Person('Colby', 1995);
const linnea = new Person('Linnea', 1993);
console.log(colby, linnea);
console.log(colby instanceof Person);

// 1. new {} is created
// 2. function is called, 'this' = {}
// 3. {} is linked to prototype
// 4. function automatically return {}


//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear);
};

colby.calcAge();
linnea.calcAge();

console.log(colby.__proto__);
console.log(colby.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(colby));

Person.prototype.species = 'Guys';
console.log(colby.species, linnea);



//Classes

//expression
const PersonCl = class {
}

//declaration
class PersonClass {
    constructor(dogName, dob) {
        this.dogName = dogName;
        this.dob = dob;
    }

    calcAge1() {
        console.log(2021 - this.dob);
    }

    greet() {
        console.log(`Hey ${this.dogName}`);
    }
}

const frodo = new PersonClass('Frodo', 1900);
console.log(frodo);
frodo.calcAge1();
frodo.greet();