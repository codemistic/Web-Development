const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];
let editedPlayer=0;
let activePlayer=0;
let currentRound=1;
const player=[
{
    name:'',
    symbol:"X"
},
{
    name:'',
    symbol:"O"
}
];

const playerConfigname=document.getElementById('config-overlay');
const backdrop=document.getElementById('backdrop');
const formElement=document.querySelector('form');
const editPlayer1BtnElement=document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement=document.getElementById('edit-player-2-btn');
const notvalidError=document.getElementById('nameError');
const startNewGameBtnElement=document.getElementById('start-game-btn');
const gameAreaElement=document.getElementById('active-game');
const gameFieldElements=document.querySelectorAll('#gameboard li');
const activePlayerNameElement=document.getElementById('active-player-name');
editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

const cancelconfigBtn=document.getElementById('cancel-config-btn');
cancelconfigBtn.addEventListener('click',cancelPlayerConfig);
backdrop.addEventListener('click',cancelPlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

startNewGameBtnElement.addEventListener('click',startNewGame);


for (const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click',selectGameField);
}
