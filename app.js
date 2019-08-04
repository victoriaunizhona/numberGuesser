/*
Game function:
-Player must guess a number between a min and a max;
-Player gets a certain amount of guesses;
-Notify the player of guesses remaining;
-Notify the player of the correct  answer if loose;
-Let player choose to play again;
*/

//Game values
let min = 1,
  max = 12,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and mx

minNum.textContent = min; //The textContent property sets or returns the text content of the specified node, and all its descendants.
maxNum.textContent = max;

// Listen for guess 

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value); // Inputs return a string

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  } // isNaN checks if it is NaN

  // Check if won
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true; //A disabled element is unusable and un-clickable. Disabled elements are usually rendered in gray by default in browsers.

    // Change color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct! You win`, 'green')
  }

})

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
