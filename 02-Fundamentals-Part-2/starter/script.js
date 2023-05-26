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
// const age1 = calcAge1(1991);


// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// console.log(age1);
// console.log(calcAge1(1991));

// // Function Expression
// // const age2 = calcAge2(1991); // This cannot be called before the expression, it only works for function declarations, not function expressions - This happens because of 'hoisting'

// // A function without a name, also called an 'anonymous function'
// // This is called an 'expression' which as you remember contains a value
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Jonas prefers expressions because they require him to keep all of the functions at the top of the page due to hoisting and because it forces them all to be stored in variables, meaning they can be accessed as easily as any other variable

// Arrow functions
// Still an expression, a variable expression
// automatically produces a return if it's one line, multiple lines require return statement.
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement}`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired🎊`)
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }

// let dolphinsAvg = calcAverage(44, 23, 71);
// let koalasAvg = calcAverage(65, 54, 49);

// console.log(dolphinsAvg, koalasAvg);

// const checkWinner = function (avg1, avg2) {
//     if (avg1 >= avg2 * 2) {
//         console.log(`Dolphins win (${avg1} vs. ${avg2}`);
//         return `Dolphins win (${avg1} vs. ${avg2}`;
//     } else if (avg2 >= avg1 * 2) {
//         console.log(`Koalas win (${avg2} vs. ${avg1}`);
//         return `Koalas win (${avg2} vs. ${avg1}`;
//     } else {
//         console.log("There is no winner, not enough points");
//         return -1;
//     }
// }

// checkWinner(koalasAvg, dolphinsAvg);

// dolphinsAvg = calcAverage(85, 54, 41);
// koalasAvg = calcAverage(23, 34, 27);

// console.log(dolphinsAvg, koalasAvg);
// checkWinner(dolphinsAvg, koalasAvg)


// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// Add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped)
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push();
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// Coding Challenge 2

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// }

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Not an actual property, wrong request. Choose between firstName, lastName, age, job and friends')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann';
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         if (this.hasDriversLicense === true) {
//             return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has a driver's license`
//         } else {
//             return `${this.firstName} is a ${this.age}-year old ${this.job}, and he doesn't have a driver's license`
//         }
//     }
// }

// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.calcAge());
// console.log(jonas.getSummary());
// console.log(jonas['calcAge'](1991));

// Coding Challenge 3:

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     }
// }

// function higherBMI() {
//     if (john.calcBMI() > mark.calcBMI()) {
//         return `John's BMI ${john.calcBMI()} is higher than Mark's BMI ${mark.calcBMI()}`;
//     } else {
//         return `Mark's BMI ${mark.calcBMI()} is higher than John's BMI ${john.calcBMI()}`;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(higherBMI());

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];
// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     // Reading from JonasArray
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // Filling the types array
//     // types[i] = typeof jonasArray[i];

//     types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === 'number') break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`--------Starting exercise ${exercise}------------`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} :Lifting weight repetition ${rep}`);
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}🏋️🏋️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// let tip;
// for (let i = 0; i < bills.length; i++) {
//     const calcTip = function () {
//         tip = bills[i] >= 50 && bills[i] <= 300 ? bills[i] * .15 : bills[i] * .2;
//         tips.push(tip);
//     }
//     calcTip();
//     totals.push(tip + bills[i])
// }
// console.log(bills)
// console.log(tips)
// console.log(totals)

