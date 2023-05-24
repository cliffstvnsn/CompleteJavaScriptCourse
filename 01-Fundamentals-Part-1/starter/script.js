// true;
// let javaScriptIsFun = false;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'String');

// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// // mutating the variable. Using LET vs. VAR vs. CONST
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990

// // const requires an initialization
// // const job;

// var job = 'programmer';
// job = 'teacher';

// // lastName = 'Schmedtmann';
// // console.log(lastName);

// const currentYear = 2037;
// const ageJonas = currentYear - 1991;
// const ageSarah = currentYear - 2016;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--
// console.log(x);

// comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 20);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';


// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I have a big cock!`);

// console.log("String with \na space\nanother space")

// console.log(`String
// Multiple
// Lines`)

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah cannot start her driving yet. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// // Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Type coercion - automatic type-casting(changing)
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3); // subtracts, multiplies, divides digits
// console.log('23' + '10' + 3); //concatenates strings

// let n = '1' + 1;
// n = n - 1;
// console.log(n); // = 10

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('e')); // Empty string is false, contains is true
// console.log(Boolean({}));

// const money = 1; // truthy and falsy in action
// if (money) {
//     console.log("Dont spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }

// let height;
// // if height = 0, this will be 'Undefined' Which is technically a bug in JavaScript
// if (height) {
//     console.log('Yay! Height is defined')
// // } else {
// //     console.log('Height is UNDEFINED')
// // }

// const age = 18;
// if (age === 18) console.log('You just became an adult');
// if ('18' == 18) console.log('You just became an adult');

// const favorite = Number(prompt('What is your favorite number?'));
// console.log(favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log('number is not 23 or 7')
// }

// if (favorite !== 23) {
//     console.log('number is a number!');
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //     console.log('Sarah is able to drive');
// // } else {
// //     console.log('Someone else should drive...');
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

// const day = 'thursday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('not a valid day')
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('write better please')
// }

// 3 * 4
// 1991
// true && false && !false

// const age = 17;
// // age >= 18 ? console.log('I like to drink wine 🍷🍷') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

const bill = '40';

// let tip;
// if (bill >= 50 || bill <= 300) {
//     tip = bill * .15;
// } else if (bill > 300) {
//     tip = bill * .2;
// } else {
//     tip = 0;
// }

let tip = bill >= 50 && bill <= 300 ? tip = bill * .15 : tip = bill * .2;

console.log(`The Bill was ${bill}. The tip was ${tip}. The total is ${Number(bill) + tip}`);


