// Array Destructuring
let names = [ 'Colby', 'Linnea' ];
let [ name1, name2 ] = names;
console.log(name1);
console.log(name2);

let names1 = [ 'Colby', 'Linnea' ];
let [ name3 ] = names1;
let [ name4, name5, name6 ] = names1;
console.log(name3);
console.log(name4);
console.log(name5);
console.log(name6);

let names2 = [ 'Colby', 'Linnea', 'Frodo', 'Dodo'];
let [ name7,,name9 ] = names2;
let [ ,,, ] = names2;
console.log(name7);
console.log(name9);

let [ a = 1, b = 2, c = 3 ] = [ 'cat', null ];
console.log(a);
console.log(b);
console.log(c);

let x = 10;
let z = 5;
[ x, z ] = [ z, x ];
console.log(x);
console.log(z);

function fn( num1, num2, ...args ) {
    console.log(num1);
    console.log(num2);
    console.log(args);
}
fn( 1, 2, 3, 4, 5, 6 );

const obj = { firstName: "Colby", lastName: "Norman" };
const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const data = { f1: 'v1', f2: '2', f3: 'v3' };
const { f1, f2: field2, f4 = 'v4' } = data;
console.log(f1, field2, f4);

const obj1 = { firstName1: 'Colby', middleName1: 'Stewart', lastName1: 'Norman' };
const { firstName1, ...otherNames } = obj1;
console.log(firstName1);
console.log(otherNames);