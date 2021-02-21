async function awaitExample(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 100);
    });
    const result = await promise;
    console.log(result);
}
awaitExample();

async function errorExample1(){
    return Promise.reject('Rejected!');
}
async function errorExample2(){
    throw 'Rejected!';
}
async function errorExample3(){
    await Promise.reject('Rejected!');
}
errorExample1().catch(console.log);
errorExample2().catch(console.log);
errorExample3().catch(console.log);

async function tryCatchExample(){
    try{
        const value1 = await Promise.resolve('success');
        const value2 = await Promise.resolve('success 2');
        const value3 = await Promise.reject('Oh No');  
    }catch(err){
    console.log(err)
    }
}
tryCatchExample();

async function awaitPromiseAll(){
    let promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 100));
    let promise2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 200));
    let promise3 = new Promise((resolve, reject) => setTimeout(() => resolve(30), 300));

    const result = await Promise.all([promise1, promise2, promise3]);
    console.log(result);
}
awaitPromiseAll();