// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// What is temp amplitude? difference between highest and lowest temp. how to comput the max and min temperatures. whats a sensor error and what to do when one occurs?

// breaking up into sub-problems
// - how to ignore errors?
// find max value in temp array
// find min value
// subtract min from max then return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) {
//             max = curTemp;
//         } else if (curTemp < min) {
//             min = curTemp;
//         }
//     }
//     console.log(max, min);
//     return max - min;
// }

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Problem 2
// Function should now receive 2 arrays of temps
// with 2 arrays should we implement functionality twice? no, just merge two arrays
// how to merge two arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) {
//             max = curTemp;
//         } else if (curTemp < min) {
//             min = curTemp;
//         }
//     }
//     console.log(max, min);
//     return max - min;
// }

// const amplitudeNew = calcTempAmplitudeNew(temperatures);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         // value: Number(prompt('Degrees celsius:'))
//         value: 10
//     }

//     console.log(measurement);
//     console.table(measurement);

//     console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// // A? IDENTIFY
// console.log(measureKelvin());


// // using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) {
//             max = curTemp;
//         } else if (curTemp < min) {
//             min = curTemp;
//         }
//     }
//     console.log(max, min);
//     return max - min;
// }

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) Identify
// console.log(amplitudeBug);

// 1. Understand the problems
// -- Array transformed to string separated by three dots
// -- what is the x days? Answer: index +1

// 2. Breaking up into sub problems
// Transform array into string
// Transform each element to string with Celcius
// String needs to contain day (index + 1)
// Add ... between elements

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ...${data1[1]}°C ...${data1[2]}°C ...`);

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ...`;
    }
    console.log("... " + str);
}
printForecast(data1);