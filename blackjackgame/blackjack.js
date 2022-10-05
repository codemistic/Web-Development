let blackjackGame = {
    'you' : {'resultSpan': '#your-blackjack-result', 'div': '#your-box', 'result': 0},
    'dealer': {'resultSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'result': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7':7, '8':8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0
}

const YOU = blackjackGame.you;
const DEALER = blackjackGame.dealer;
const hitSound = new Audio('sounds/swish.m4a');
const awwSound = new Audio('sounds/aww.mp3');
const cashSound = new Audio('sounds/cash.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);
document.querySelector('#blackjack-deal-button').addEventListener('click', reset);

function blackjackHit(){
    let card = randomCard();
    showCard(card, YOU);
    updateAndShowResult(card, YOU);
    document.querySelector('#blackjack-stand-button').disabled = false;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blackjackStand(){
    document.querySelector('#blackjack-hit-button').disabled = true;
    document.querySelector('#blackjack-deal-button').disabled = true;
    while(DEALER.result < 16 && DEALER.result < YOU.result){
        let card = randomCard();
        showCard(card, DEALER);
        updateAndShowResult(card, DEALER);
        await sleep(1000);
    }
    let res = findWinner();
    if(res == "DRAW"){
        blackjackGame.draws++;
        document.querySelector('#draws').textContent = blackjackGame.draws;
        document.querySelector("#blackjack-result").textContent = "It's a DRAW!";
        document.querySelector("#blackjack-result").style.color = "silver";
    }else if(res === YOU){
        blackjackGame.wins++;
        document.querySelector('#wins').textContent = blackjackGame.wins;
        document.querySelector("#blackjack-result").textContent = "YOU WON!";
        document.querySelector("#blackjack-result").style.color = "green";
        cashSound.play();
    }else{
        blackjackGame.losses++;
        document.querySelector('#losses').textContent = blackjackGame.losses;
        document.querySelector("#blackjack-result").textContent = "YOU LOST!";
        document.querySelector("#blackjack-result").style.color = "red";
        awwSound.play();
    }
    document.querySelector('#blackjack-stand-button').disabled = true;
    document.querySelector('#blackjack-deal-button').disabled = false;
}

function randomCard(){
    let num = Math.floor(Math.random() * 13);
    let card = blackjackGame.cards[num];
    return card;
}

function showCard(card, activePlayer){
    if(activePlayer.result <= 21){
        let cardImage = document.createElement('img');
        cardImage.style.width = "100px";
        cardImage.style.height = "150px";
        cardImage.style.padding = "10px";
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function reset(){
    const imagesList = document.querySelector('.flex-blackjack-row-1').querySelectorAll('img');
   // console.log(imagesList);
    for(let i=0;i<imagesList.length;i++){
        imagesList[i].remove();
    }
    YOU.result = 0;
    DEALER.result = 0;
    document.querySelector(YOU.resultSpan).textContent = "0";
    document.querySelector(YOU.resultSpan).style.color = 'white';
    document.querySelector(DEALER.resultSpan).textContent = "0";
    document.querySelector(DEALER.resultSpan).style.color = 'white';
    document.querySelector("#blackjack-result").textContent = "Let's Play!";
    document.querySelector("#blackjack-result").style.color = "black";
    document.querySelector('#blackjack-deal-button').disabled = true;
    document.querySelector('#blackjack-hit-button').disabled = false;
}

function updateAndShowResult(card, activePlayer){
    if(card === 'A'){
        //if card is A then we have two options to choose as, either 1 or 11, so take 11 if you get sum total <=21
        if(activePlayer.result + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer.result += blackjackGame['cardsMap'][card][1];
        }else{
            activePlayer.result += blackjackGame['cardsMap'][card][1];
        }
    }else{
        activePlayer.result = activePlayer.result + blackjackGame['cardsMap'][card];
    }
    if(activePlayer['result'] > 21){
        document.querySelector(activePlayer['resultSpan']).textContent = "BUST!";  
        document.querySelector(activePlayer['resultSpan']).style.color = 'red';  
    }else{
    document.querySelector(activePlayer['resultSpan']).textContent = activePlayer.result;
    }
}


function findWinner(){
    let winner;
    if(YOU.result <= 21){
        if(YOU.result > DEALER.result || DEALER.result > 21){
            winner = YOU;
            console.log("YOU WON");
        }else if(YOU.result < DEALER.score){
            console.log("YOU LOST");
            winner = DEALER;
        }else if(YOU.result === DEALER.result){
            console.log("DRAW");
            winner = "DRAW";
        }
    }else if(YOU.result >21 && DEALER.result <= 21){
        winner = DEALER;
    }else if(YOU.result > 21 && DEALER.result > 21){
        console.log("DRAW");
        winner = "DRAW";
    }
    return winner;
}