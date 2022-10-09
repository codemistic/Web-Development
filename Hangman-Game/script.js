let word=document.querySelector('.word');
const notification=document.querySelector('.notification');
const playAgain=document.querySelector('#btn');
const wrong=document.querySelector('.wrong');
const wrongLetters=document.querySelector('.wrong-letter');
const popup=document.querySelector('.popup-container');
const message=document.querySelector('.message');
const figureParts=document.querySelectorAll('.figure-part');

let wordsArray=['programming','cricket','javascript','project','frontend','tech'];
let typedLettersArray=[];
let indexArray=[];
let wrongCount=1;
let rightCount=0;
let wrongLettersArray=[];

let letterArray=letterArrayReturn();

displayWords();

// Functions
function letterArrayReturn(){
    let randomNumber=Math.floor(Math.random()*wordsArray.length);
    let randomWord=wordsArray[randomNumber];
    return randomWord.split('');        // This splits every character of the String and makes a new Array
}

function displayWords(){
    word.innerHTML=``;
    letterArray.forEach(function (element) {
        word.innerHTML+=`<span class="letter"></span>`
    });
}

function showNotification(e){
    if(e.keyCode>=65 && e.keyCode<=90){
        notification.classList.add('show');
        setTimeout(function(){
            notification.classList.remove('show');
        },2000)
    }
}

function lostGameCheck(){
    if(wrongCount===7){
        popup.style.display='flex';
        message.innerText='So Sad! You Lost :(';
        playAgain.innerText='Play Again';
    }
}

function wonGameCheck(){
    if(rightCount===letterArray.length){
        popup.style.display='flex';
        message.innerText='Yayy! You Won :)';
        playAgain.innerText='Play Again';
    }
}

// Event Listeners
playAgain.addEventListener('click',function(){
    // Reseting everything
    popup.style.display='none';
    wrong.innerText='';
    wrongLetters.innerText='';
    letterArray=letterArrayReturn();
    displayWords();
    typedLettersArray=[];
    indexArray=[];
    wrongLettersArray=[];
    wrongCount=0;
    rightCount=0;
    figureParts.forEach(function(part,index){
        part.style.display="none";
    })
});

document.addEventListener('keydown',function(e){
    let inputKey=e.key.toLowerCase();
    let inputKeyCode=e.keyCode;
    if(inputKeyCode>=65 && inputKeyCode<=90 && !letterArray.includes(inputKey) && !wrongLettersArray.includes(inputKey)){
        wrongLettersArray.push(inputKey);
        console.log("running");
        
        console.log(wrongLettersArray.length+' Before')
        figureParts.forEach(function(part,index){
            let errors=wrongLettersArray.length;
            console.log('errors='+errors +' and index='+index)
            if(index<errors){
                part.style.display="block";
            }
        })
    }
});

document.addEventListener('keydown',function(e){
    rightCount=0;
    if(!letterArray.includes(e.key) && wrongCount<7 && !typedLettersArray.includes(e.key) && (e.keyCode>=65 && e.keyCode<=90)){
        wrong.innerText='Wrong';
        wrongLetters.innerHTML+=`${e.key}`+' ';
        wrongCount++;
        lostGameCheck();
    }

    if(typedLettersArray.includes(e.key)){
        showNotification(e);
    } else {
        word.innerHTML='';
        for(let i=0;i<letterArray.length;i++){
            if(letterArray[i]===(e.key)){
                indexArray.push(i);
            }
        }
        typedLettersArray.push(e.key);
        letterArray.forEach(function(element,index){
        if(indexArray.includes(index)){
            word.innerHTML+=`<span class="letter">${element}</span>`
            rightCount++;
        } else {
            word.innerHTML+=`<span class="letter"></span>`
        }
        wonGameCheck();
    });             
}
});