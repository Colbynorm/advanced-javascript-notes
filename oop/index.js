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
