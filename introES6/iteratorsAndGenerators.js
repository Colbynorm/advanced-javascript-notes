//Iterator
function createIterator(array){
    let currentIndex = 0;
    return{
        next(){
            return currentIndex < array.length ? {value: array[currentIndex++], done: false} : {done: true};
        }
    };
}

let it = createIterator(['Hello', 'World']);
console.log(it.next());
console.log(it.next());
console.log(it.next());

//generator
function *gen(){
    let i = 1;
    while (true){
        yield i;
        i = i * 2;
    }
}
const generator = gen();
console.log(generator.next(), generator.next(), generator.next());