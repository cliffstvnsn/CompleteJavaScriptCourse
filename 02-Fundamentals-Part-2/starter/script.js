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

