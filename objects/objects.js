// TASK 1 --- Hello, object
// importance: 5
// Write the code, one line for each action:

let user = {};          // Create an empty object user.
user.name = "John";     // Add the property name with the value John.
user.surname = "Smith"; // Add the property surname with the value Smith.
user.name = "Pete";     // Change the value of the name to Pete.
delete user.name;       // Remove the property name from the object.


// TASK 2 --- Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
    for (let prop in obj) {
        return false
    }
    return true
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


// TASK 3 --- Sum object properties
// importance: 5
// We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(obj) {
    if (!isEmpty(obj)) {
        let sumObj = 0
        for (let prop in obj) {
            sumObj += obj[prop]
        }
        return sumObj
    }
}

console.log(sumSalaries(salaries))

// TASK 4 --- Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (let prop in menu) {
        if (typeof menu[prop] == 'number') {
            menu[prop] *= 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu)
