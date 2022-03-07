'use strict';

// Global Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Display Message function
const displayMessage = function (text) {
  document.querySelector('.message').textContent = text;
};

// Change background color of the bod
const bodyBG = function (text) {
  document.querySelector('body').style.backgroundColor = text;
};

// BOX WIDTH of secret Number
const bodyWidth = function (text) {
  document.querySelector('.number').style.width = text;
};

// Change the HIGHSCORE if you have done it
const highScore = function (text) {
  document.querySelector('.highscore').textContent = text;
};

// Current score
const changeScore = function (text) {
  document.querySelector('.score').textContent = text;
};

// Secret Number Visibility
const secretNV = function (text) {
  document.querySelector('.number').textContent = text;
};

// Input Number Value
const inputNV = function (text) {
  document.querySelector('.guess').value = text;
};

// Main function - game logic implemented here
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Check if you input the number
  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    // If number is correct
    displayMessage('Correct Number!');
    bodyBG('#60b347');
    bodyWidth('30rem');
    if (score > highscore) {
      highscore = score;
      highScore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      score--;
      changeScore(score);
    } else {
      // You Loose
      displayMessage('You Lost!');
      changeScore(0);
      bodyBG('red');
    }
  }
});

// Reset function - on click Again!
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  changeScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  secretNV('?');
  inputNV('');
  bodyBG('#222');
  bodyWidth('15rem');
});
