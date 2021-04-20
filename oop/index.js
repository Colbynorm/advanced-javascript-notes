// constructor function
const Person = function(firstName, birthYear) {
    console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const colby = new Person('Colby', 1995);
console.log(colby);

// 1. new {} is created
// 2. function is called, 'this' = {}
// 3. {} is linked to prototype
// 4. function automatically return {}


//Prototypes
