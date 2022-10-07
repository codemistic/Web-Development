var gamePattern = [];


var buttonColours = [ "red", "blue", "green", "yellow"];


function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
}
alert(randomChosenColour);

$("button").on("click",function(){$("button").animate({    $('p')fadeIn();
        $('p').fadeOut();
    }, 500);})})
