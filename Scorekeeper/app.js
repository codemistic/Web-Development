const P1Button = document.querySelector('#P1Button');
const P2Button = document.querySelector('#P2Button');
const Reset = document.querySelector('#Reset')
const P1Display = document.querySelector('#P1Display');
const P2Display = document.querySelector('#P2Display');
const winningScoreSelect = document.querySelector('#playto');

let P1Score = 0;
let P2Score = 0; 
let GameOver = false;
let winningScore = 3;

P1Button.addEventListener('click', function() {
    if(!GameOver){
        P1Score += 1;
    }
    if(P1Score===winningScore){
        GameOver=true;
        P1Display.classList.add('has-text-success');
        P2Display.classList.add('has-text-danger');
        P1Button.disabled=true;
        P2Button.disabled=true;
    }
    P1Display.textContent = P1Score;
})

P2Button.addEventListener('click', function() {
    if(!GameOver){
        P2Score += 1;
    }
    if(P2Score===winningScore){
        GameOver=true;
        P2Display.classList.add('has-text-success');
        P1Display.classList.add('has-text-danger');
        P1Button.disabled=true;
        P2Button.disabled=true;
    }
    P2Display.textContent = P2Score;
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

Reset.addEventListener('click', reset)

function reset() {
    GameOver = false;
    P1Score = 0;
    P2Score = 0;
    P1Display.textContent = 0;
    P2Display.textContent = 0;
    P1Button.disabled=false;
    P2Button.disabled=false;
    P1Display.classList.remove('has-text-success', 'has-text-danger');
    P2Display.classList.remove('has-text-success', 'has-text-danger');
}
