var ndrums = document.querySelectorAll(".drum").length;

for(var i=0;i<ndrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var gL = this.innerHTML;

      playSound(gL);

      showAnimation(gL);
    });
}

document.addEventListener("keypress", function(event) {
  playSound(event.key);
  showAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    case "j":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
    break;
    case "k":
      var Crash = new Audio("sounds/crash.mp3");
      Crash.play();
    break;
    case "l":
      var Snare = new Audio("sounds/snare.mp3");
      Snare.play();
    break;
    default:
      console.log("Who_knows");
  }
}

function showAnimation(key){
  var activeButton = document.querySelector("." + key);
// add class
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
