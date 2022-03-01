'use strict';

//creates a secret random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//fucntion for the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//record value of input into the button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //function for checking the guessed number

  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No Number!';
    displayMessage('🚫 No Number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    //changing body color when guess is correct
    document.querySelector('body').style.backgroundColor = '#60b347';
    //changing width
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.transition = 'all .25s';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📈 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📈 Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//set all values to default state
document.querySelector('.again').addEventListener('click', function () {
  //reloads the entire page
  // location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
