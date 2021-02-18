function getPersionES6(name, age, height){
    return {
        name,
        height,
        getAge(){ return age }
    };
}
getPersionES6('Colby', 25, '6FT').getAge();

// const varName = 'firstName';
// const person = {
//     [ varName ] : 'Colby',
//     lastName : 'Norman'
// };
// console.log(person.firstName);

const varName = 'first';
function computeNameType( type ) {
    return type + 'Name';
}

const person = {
    [ varName + 'Name' ] : "Colby",
    [ computeNameType('last') ] : "Norman"
};
console.log(person.firstName);
console.log(person.lastName);

const PI = 3.14;
const in_to_ft = .083;
const exportObject = {
    PI,
    in_to_ft,
    sum(n1, n2){
        return n1 + n2;
    },
    subtract(n1, n2){
        return n1 - n2;
    }
};
console.log(exportObject);