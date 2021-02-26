function addImperative(arr){
    let result = 0;
    for(let i=0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

function addDeclarative(arr){
    return arr.reduce((red, val) => red + val, 0);
}


function imperative(arr){
    const filtered = [];
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] > 0){
            filtered.push(arr[i]);
        }
    }
    for(let j = 0; j < filtered.length; j++){
        filtered[j] = 2 * filtered[j];
    }
    return filtered;
}

function declarative(arr){
    return arr.filter(v => v > 0).map(v => 2 * v);
}

const values = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
console.log(imperative(values));
console.log(declarative(values));

//pure function
const state = {prop1: 5};

function notPure(){
    return state.prop1 > 0 ? 'Valid' : 'Invalid';
}

function pure(val){
    return val > 0 ? 'Valid' : 'Invalid';
}
console.log(notPure());
console.log(pure(state.prop1));

function notPure1(input){
    input.prop2 = 'test';
}
function pure1(input){
    input = JSON.parse(JSON.stringify(input));
    input.prop2 = 'test';
    return input;
}

const data = [ {f1: 6, f2: 3}, {f1: 12, f2: 0}, {f1: 9, f2: 1}, {f1: 6, f2: 7} ];

function swap(key1, key2){
    return obj => {
        [obj[key1], obj[key2]] = [obj[key2], obj[key1]];
        return obj;
    }
}
console.log(data.map(swap('f1', 'f2')));

//Shared States
const state1 = {age: 25};
function doSomething(name){
    return state.age > 21 ? `${name} is not old enough` : `${name} is old enough`;
}
console.log(doSomething('Colby'));

const person = {age: 25, firstName: 'Colby', lastName: 'Norman'};
function getOlder(age){
    return ++age;
}
function formatName(first, last){
    return `Mr. ${first} ${last}`;
}
console.log(person);
person.age = getOlder(person.age);
person.name = formatName(person.firstName, person.lastName);
console.log(person);

//Immutability
const data1 = {
    prop3: 'value1',
    objectProp: {p1: 'v1', p2: 'v2'},
    arrayProp: [1, 'Test', {p1: 'v1'}, [1, 2, 3]]
};
console.log(Object.freeze(data1));
console.log(Object.freeze(data1.objectProp));
console.log(Object.freeze(data1.arrayProp));
console.log(Object.freeze(data1.arrayProp[2]));
console.log(Object.freeze(data1.arrayProp[3]));

//function composition
function multiplyBy2(c){
    return 2 * c;
}
function sumNumbers(a, b){
    return a + b;
}
const v1 = sumNumbers(2, 4);
const v2 = multiplyBy2(2);
const v3 = multiplyBy2(sumNumbers(2, 4));

console.log(v1, v2, v3);