var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var score=0;
var jumping = 0;
var point = new Audio("sounds/score.mp3");
var fly = new Audio('sounds/fly.mp3');
var over = new Audio('sounds/over.wav');


hole.addEventListener('animationiteration', function() {
    var random = Math.random()*4;
    var top = (random*100)+150;
    hole.style.top = -(top) + "px";
    score++;
    point.play();
});
setInterval( function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(620-characterTop);
    if(jumping==0){
    character.style.top = (characterTop+2) + "px";}
    if(characterTop>620 || ( (blockLeft<40) && (blockLeft>-30) && ( (cTop<holeTop) || (cTop>(holeTop+130)) ) ) ){
        over.play();
        alert("Game over!!!!" + "  " + score);
        character.style.top = "100px";
        score=0;
        
    }
}, 10);

function jump(){
    jumping=1;
    let jumpCount=0;
    var jumpInterval = setInterval(function() {
         var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(characterTop>6 && (jumpCount<15)){
                character.style.top = (characterTop-5) + "px";
                fly.play();
        } 
        jumpCount++;
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }

    },10);
}

$("#character").keypress(function(inside){
    if(inside.which === 38){
        jump();
    }
});
