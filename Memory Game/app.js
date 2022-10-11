const cardArray = [
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "fries",
    img: "img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardChosenId = [];
const cardWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1]


  if(optionOneId == optionTwoId){

    cards[optionOneId].setAttribute('src', 'img/blank.png')
    cards[optionTwoId].setAttribute('src', 'img/blank.png')
      alert('you have clicked the same image!');
  }
  if (cardChosen[0] == cardChosen[1]) {
    alert("you found a match");
    cards[optionOneId].setAttribute('src', 'img/white.png');
    cards[optionTwoId].setAttribute('src', 'img/white.png');
    cards[optionOneId].removeEventListener('click',flipCard);
    cards[optionTwoId].removeEventListener('click',flipCard);
    cardWon.push(cardChosen);
  }else{
      cards[optionOneId].setAttribute('src', 'img/blank.png');
      cards[optionTwoId].setAttribute('src','img/blank.png');
      alert('sorry try again');
  }


  resultDisplay.textContent = cardWon.length
 cardChosen = [];
 cardChosenId = [];

if(cardWon.length == cardArray.length/2){
    resultDisplay.textContent = "Cogratulation you found them all!";
}
}
function flipCard() {

  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  console.log(cardChosen);
  console.log(cardChosenId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}
