function fibonacci(i){
    if(i <= 0){
        return 0;
    }else if(i === 1){
        return 1;
    }else {
        return fibonacci(i - 1) + fibonacci(i - 2);
    }
}

function test(value, expected){
    if(value !== expected){
        throw new Error('Value did not match expected value');
    }else {
        console.log('Test Passed!');
    }
}

test(fibonacci(0), 0);
test(fibonacci(1), 1);
test(fibonacci(2), 1);
test(fibonacci(5), 5);
test(fibonacci(7), 13);
test(fibonacci(9), 34);


function adjustValue(value){
    if(value > 5){
        value--;
    }else if (value < -5){
        value++
    }
    return value;
}
adjustValue(10);


function validate(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = parseInt(document.getElementById('age').value, 10);

    if(!name){
        throw new Error('Must provide a name');
    }else if(name.length <= 0 || name.length > 50){
        throw new Error('Name must be between 1 and 50 characters.');
    }

    if(!email){
        throw new Error('Must provide an email');
    }else if(email.length <= 0 || email.length > 50){
        throw new Error('email must be between 1 and 50 characters.');
    }

    if(!age){
        throw new Error('Must provide an age that is a number');
    }else if(age.length < 13){
        throw new Error('Age must be at least 13');
    }

    console.log(`User Detail: Name: ${name}, Email: ${email}, Age: ${age}`);
}