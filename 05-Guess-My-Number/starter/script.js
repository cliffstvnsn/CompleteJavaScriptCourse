'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎊';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// trunc removes the decimal. random picks a number between 0 and 1. Multiplying it by 20 gives us a number between 0 and 19. adding the 1 gives us 0 and 20 inclusive. I could alternatively do * 21
// This is also a STATE variable
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// THIS is a STATE variable
let score = 20;
// State variable for HIGHSCORE
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// Many ways to listen for events, but this is the best one
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        displayMessage('No Number! ⛔');
        // When the player wins (guesses the right number)
    } else if (guess === secretNumber) {
        displayMessage('🎊 Correct Number! ');
        // document.querySelector('.message').textContent = '🎊 Correct Number! ';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Number too high! ' : '📉 Number too low! ')
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Number too high! ' : '📉 Number too low! ';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💣You lost the game!')
            // document.querySelector('.message').textContent = '💣You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
});
//     // When guess is too high
// } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '📈 Number too high! ';
//         score = score - 1;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = '💣You lost the game!'
//         document.querySelector('.score').textContent = 0;
//     }
//     // When guess is too low
// } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '📉 Number too low! ';
//         score = score - 1;
//         document.querySelector('.score').textContent = score;
//     } else {
//         document.querySelector('.message').textContent = '💣You lost the game!'
//         document.querySelector('.score').textContent = 0;
//     }
// }
// });

// Coding Challenge 1: Implement the again functionality resetting the page
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

