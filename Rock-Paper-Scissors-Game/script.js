
const scores = {'computerScore':0 , 'playerScore':0}

function getComputerChoice() {
  let options = ['Rock','Paper','Scissors']
  let n = Math.floor(Math.random()*3)

  return options[n]
}


function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  var score=0;
  // All situations where human draws, set `score` to 0
  if(playerChoice === computerChoice){
    score = 0;
  }else if(playerChoice==='Rock' && computerChoice==='Scissors'){
   score = 1
 }else if(playerChoice==='Paper' && computerChoice==='Rock'){
   score = 1
 }else if(playerChoice==='Scissors' && computerChoice==='Paper'){
   score = 1

 }else{
   score = -1
 }

 return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if(score == -1){
    resultDiv.innerText = 'You Lose!'
  }else if(score == 1){
    resultDiv.innerText = 'You Win!'
  }else{
    resultDiv.innerText = 'Draw!'
  }

  handsDiv.innerText=`🧑‍🦰 ${playerChoice} vs 🤖 ${computerChoice}`
  playerScoreDiv.innerText =` Your Score:  ${scores['playerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
 const score = getResult(playerChoice.value,computerChoice)
 scores['playerScore'] += score
 showResult(score, playerChoice.value,computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
 const selection = document.querySelectorAll('.rpsButton')

selection.forEach(clickks =>{
  clickks.onclick = () => onClickRPS(clickks)
})


  // Add a click listener to the end game button that runs the endGame() function on click
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

// ** endGame function clears all the text on the DOM **
playGame()
