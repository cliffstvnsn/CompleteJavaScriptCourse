

// // Assignment 1 - values and variable
// let country = 'USA';
// let continent = 'North America';
// let population = 331900000;

// console.log(country);
// console.log(continent);
// console.log(population);

// // Assignment 2 - data types

// let isIsland = false;

// console.log(typeof isIsland, typeof population, typeof country);

// // assignment 3 - let, const and var

// const language = 'English';

// // Assignment 4 - let, const and var
// let half = population / 2;
// console.log(half);

// let newPop = population + 1;
// console.log(newPop);

// const finlandPop = 600000;
// if (population > finlandPop) console.log(true);

// const avgPopulation = 3300000;
// console.log(population > avgPopulation);

// let description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language;
// console.log(description);

// Coding Challenge 1;

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI > johnBMI);

const isHigher = johnBMI > markBMI;
if (isHigher) {
    console.log(`John's BMI ${johnBMI} is Higher than Mark's BMI ${markBMI}`);
} else {
    console.log(`Mark's BMI ${markBMI} is Higher than John's BMI ${johnBMI}`);
};