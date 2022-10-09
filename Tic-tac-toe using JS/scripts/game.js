function resetGameStatus(){
  activePlayer=0;
  currentRound=0;
  gameOver.firstElementChild.innerHTML='You Won,<span id="winner">Player name</span>!';
  gameOver.style.display='none';
  
  let gameBoardIndex=0;
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        gameData[i][j]=0;
        const gameBoardItemElement=gameboard.children[gameBoardIndex];
        gameBoardItemElement.textContent='';
        gameBoardItemElement.classList.remove('disabled')
        gameBoardIndex++;
    }
  }
}




function startNewGame(){
    if(player[0].name===''|| player[1].name=== ''){
    alert('Please set custom player names for both players');
    return;
    }
    activePlayerNameElement.textContent=player[activePlayer].name;
    gameAreaElement.style.display="block";
    resetGameStatus();
}

function switchPlayer(){
    if(activePlayer===0){
        activePlayer=1;
    }
    else{
        activePlayer=0;
    }
    activePlayerNameElement.textContent=player[activePlayer].name;
}


function selectGameField(event){
    const selectedField=event.target;
    const selectedColumn=selectedField.dataset.col-1;
    const selectedRow=selectedField.dataset.row-1;

    if(gameData[selectedRow][selectedColumn]>0){
        alert('please select an empty box');
        return;
    }

    event.target.textContent=player[activePlayer].symbol;
    event.target.classList.add('disabled');


    
    gameData[selectedRow][selectedColumn]=activePlayer+1;

    const winnerId=checkForGameOver();
    
    if(winnerId!==0){
        endGame(winnerId);
    }
    
    currentRound++;
    switchPlayer();
}

function checkForGameOver(){
for(let i=0;i<3;i++){
    if(gameData[i][0]>0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]){
        return gameData[i][0];
    } 
}
for(let i=0;i<3;i++){
    if(gameData[0][i]>0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]){
        return gameData[0][i];
    } 
}
//diagonal top left to bottom right
if(gameData[0][0]>0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]){
    return gameData[0][i];
} 
//diagonal bottom right to up to top left
if(gameData[2][2]>0 && gameData[2][2] === gameData[1][1] && gameData[1][1] === gameData[0][0]){
    return gameData[2][2];
} 
if(gameData[2][0]>0 && gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]){
    return gameData[2][0];
} 
if(gameData[0][2]>0 && gameData[0][2] === gameData[1][1] && gameData[0][2] === gameData[2][0]){
    return gameData[0][2];
} 
if(currentRound===9){
    return -1;
}
return 0;
}

function endGame(winnerId){
    gameOver.style.display = 'block';
    if(winnerId >0){
        const winnerName=player[winnerId-1].name;
        gameOver.firstElementChild.firstElementChild.textContent=winnerName;
    }
    else{
        gameOver.firstElementChild.textContent='It\'s a draw';
    }
}
