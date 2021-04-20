let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
//c, d, e
console.log(arr.slice(2, 4));
//c, d
console.log(arr.slice(-2));
//d, e
console.log(arr.slice(-1));
//e
console.log(arr.slice(1, -2));
//b, c
console.log(arr.slice());
//a, b, c, d, e
console.log([...arr]);
//a, b, c, d, e


//console.log(arr.splice(2));
//c, d, e
arr.splice(-1);
console.log(arr);
//a, b, c, d
arr.splice(1, 2);
console.log(arr);
//a, b


const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);


const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);


console.log(letters.join(' - '));