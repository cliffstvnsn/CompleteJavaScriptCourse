'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         const output = `${firstName}, You are ${age}, born in ${birthYear}`
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }
//         // console.log(str);
//         console.log(millenial);
//         console.log(millenial);
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// Hoisting with Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// // console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3))

// // Declarative functions get hoisted all the way to the top
// function addDecl(a, b) {
//     return a + b;
// }

// // Same error as declaring a variable, because this is the same. It gets hoisted but it's in the temporal dead zone until the program gets to this line. Same for arrow function (expression function)
// let addExpr = function (a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// // Example
// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

// // Var variables are casted onto the window object. The Global Scope of the JavaScript in the browser, const and let are not
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// This KEYWORD ---------- RULES
// Method -> points to the object that is calling the method

// Simple function call -> this is undefined IF you're in strict mode. OTHERWISE: Then the THIS keyword will point to the window object. Always use strict mode

// Arrow function : it becomes the this keyword of the parent function. Arrow function do not get their own this keyword. In technical terms, that is called the 'lexical' this keyword

// EventListener -> DOM element that the handler is attached to.

// THIS will never point to the FUNCTION in which we are USING IT
// THIS will never point to the environment variable of the function

// console.log(this);

// const calcAge = function (birthyear) {
//     // console.log(2037 - birthyear);
//     // console.log(this);
// }

// const calcAgeArrow = birthyear => {
//     // console.log(2037 - birthyear);
//     // console.log(this);
// }

// // calcAgeArrow(1999);

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();

// const f = jonas.calcAge;
// f();
// var firstName = 'Matilda';

// // this.firstName is this on the window object .firstName of which there is not firstName on the window object
// const jonas = {
//     firstName: 'Jonas',
//     year: 2023,
//     calcAge: function () {
//         // console.log(this);
//         console.log(2037 - this.year);

//         // Solution 1 to access this up the scope chain. Stick this into another variable called self or THAT
//         // const self = this;
//         // const isMillenial = function () {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year >= 1996)
//         // };
//         // isMillenial();

//         // Solution 2 - arrow function inherits the this keyword from it's parents' scope
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year >= 1996)
//         };
//         isMillenial();
//     },
//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`)
//     }
// }
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }
// addExpr(2, 5);
// addExpr(2, 5, 6, 8, 12);

// var addArrow = (a, b) => {
//     console.log(arguments)
//     return a + b;
// }
// addArrow();

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Jonas',
//     age: 30,
// }

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
// console.log(lastName, oldLastName);

// Reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log('Jessica:', jessica);
// console.log('Married Jessica:', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Jessica:', jessica2);
console.log('Married Jessica:', jessicaCopy);