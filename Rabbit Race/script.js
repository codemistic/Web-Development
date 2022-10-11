'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newBtnEl = document.querySelector('.btn--new');
const rollBtnEl = document.querySelector('.btn--roll');
const holdBtnEl = document.querySelector('.btn--hold');
const quesBtnEl = document.querySelector('.help');
const modalEl = document.querySelector('.modal-wrapper');
const modalBgEl = document.querySelector('.modal-bg');

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let winner = false;

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

rollBtnEl.addEventListener('click', function () {
  if (!winner) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

quesBtnEl.addEventListener('click', function () {
  modalEl.classList.remove('modal--close');
});

modalBgEl.addEventListener('click', function () {
  modalEl.classList.add('modal--close');
});

holdBtnEl.addEventListener('click', function () {
  if (!winner) {
    scores[activePlayer] += currentScore;
    if (scores[activePlayer] >= 100) {
      winner = true;
      diceEl.classList.add('hidden');
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

newBtnEl.addEventListener('click', function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  winner = false;

  score0El.textContent = 0;
  score1El.textContent = 0;
  curr0El.textContent = 0;
  curr1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
});
