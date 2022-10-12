//Detecting ButtonPress
var numOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",virtualclick);

function virtualclick(){
    console.log(this);
    var buttonClick=this.innerHTML;
    Click(buttonClick);
    buttonAnimation(buttonClick);
    //what to do when click detected.
}

}



//Detecting keyboardPress
document.addEventListener("keypress",function(event){
    Click(event.key);
    buttonAnimation(event.key);
});


//fuctions
function Click(key){
    
    
    switch (key) {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case "j":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "k":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "l":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
    
        default:
            alert("Oppsie!wrong pressed.")
        break;
    }
}

function buttonAnimation(currentKey){
    var activeKey=document.querySelector("."+ currentKey);
    activeKey.classList.add("pressed");



    //to remove animation
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);
}