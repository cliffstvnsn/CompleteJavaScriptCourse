'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; //Strict mode reveals errors!
// const private = 534;

// function logger() {
//     console.log('My name is Jonas');
// }

// // invoking, running, or calling the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleAndOrangeJuice = fruitProcessor(2, 4);
// console.log(appleAndOrangeJuice);

// Function Declaration
const age1 = calcAge1(1991);


function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(age1);
console.log(calcAge1(1991));

// Function Expression
const age2 = calcAge2(1991); // This cannot be called before the expression, it only works for function declarations, not function expressions - This happens because of 'hoisting'

// A function without a name, also called an 'anonymous function' 
// This is called an 'expression' which as you remember contains a value
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// const age2 = calcAge2(1991);

console.log(age1, age2);

// Jonas prefers expressions because they require him to keep all of the functions at the top of the page due to hoisting and because it forces them all to be stored in variables, meaning they can be accessed as easily as any other variable




