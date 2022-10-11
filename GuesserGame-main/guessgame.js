'use strict';

//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = '🎉 correct number';
//document.querySelector('.number').textContent = 15;
//document.querySelector('.score').textContent = 7;
//document.querySelector('.guess').value = 23;
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // game logic
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a valid input!';
  } else if (guess === secretnumber) {
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretnumber) {
    document.querySelector('.message').textContent = 'TOO HIGH!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretnumber) {
    document.querySelector('.message').textContent = 'too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});