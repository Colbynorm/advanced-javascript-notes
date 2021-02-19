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