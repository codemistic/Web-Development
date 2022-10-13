const images = document.querySelectorAll('.game-image');
    let isClicked = false;
    let firstCard,secondCard;
    let lock=  false;
function flip(){
    if(lock)return;
    if(this===firstCard)return;
    this.classList.add('flipping');
    
    if(!isClicked){
        isClicked=true;
        firstCard=this;
    }
    else {
        secondCard=this;
        
      checkIfMatch();
     
    }
    

}
function checkIfMatch(){
    if(firstCard.dataset.framework===secondCard.dataset.framework){
        disableFlip();
   
    }
    else{
        ableFlip();
}
}

function disableFlip(){
    firstCard.removeEventListener("click",flip);
    secondCard.removeEventListener("click",flip);
    resetCode();   
}


function ableFlip(){
    lock=true;
    setTimeout(()=>{
        firstCard.classList.remove('flipping');
        secondCard.classList.remove('flipping');

         resetCode();
        }, 700)
    }
   

function resetCode(){
    [isClicked,lock]=[false,false];
    [firstCard,secondCard]=[null,null];
}

(function suffle(){
    images.forEach(images =>{
        let randomPosition=Math.floor(Math.random()*18);
        images.style.order=randomPosition;
    });

})();//extra parenthies will make it a imidiate invoked function
images.forEach(images => images.addEventListener("click",flip));
