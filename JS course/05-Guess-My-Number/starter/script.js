'use strict';

//creates a secret random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

//record value of input into the button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //function for checking the guessed number

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    //changing body color when guess is correct
    document.querySelector('body').style.backgroundColor = '#60b347';
    //changing width
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.transition = 'all .25s';

    //when guess is higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is lower
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//reload the page
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
