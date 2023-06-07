'use strict';

// const bookings = [];

// // Default params!!!
// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     bookings.push(booking)
//     console.log(booking);
// }

// createBooking('LH123')
// createBooking('LH123', 2, 800)
// createBooking('LH123', 2)
// createBooking('LH123', 5)

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 243849508
}

const checkIn = function (flightNum, passenger,) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 243849508) {
        alert('checkin');
    } else {
        alert('wrong passport')
    }
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {

}