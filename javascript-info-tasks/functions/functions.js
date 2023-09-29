// Task 1


//There is no difference between the two functions:

/*
function checkAge(age) {
    if (age > 18) {
        return 'Enjoy the mature content';
    } else {
        return confirm('Did parents allow you?');
    }
}

alert(checkAge(prompt('What is your age?')));
*/

/*
function checkAge(age) {
    if (age > 18) {
        return 'Enjoy the mature content';
    }
    // ...
    return confirm('Did parents allow you?');
}

alert(checkAge(prompt('What is your age?')));
*/


// Task 2
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }

// alert(checkAge(prompt('What is your age?')));


//Task 3 & 4
//Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b){
    if (a == b) {
        return a;
    } else if (a > b){
        return b;
    } else {
        return a;
    }
}

function pow(x, n){
    if (n < 1) {
        return 1;
    }
    for (let i = 0; i < n-1; i++){
        x = x * x;
    }
    return x;
}
let num1 = Number(prompt('Enter the first valid number'));
let num2 = Number(prompt('Enter the second valid number'));

alert('The smaller number is: ' + min(num1, num2));
alert(`${num1} Raised to the power of ${num2} is: ` + pow(num1, num2));
