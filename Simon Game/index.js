var list = document.querySelectorAll(".btn");
var seq = [];
var colors = ["red","green","yellow","blue"];
var count = 0;
var clicks = 0;
var level = 0;

function highlight(i){
    setTimeout(()=>{
        $("#"+seq[i]).addClass("animate");                                     
        $("#"+seq[i]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).delay(100);  //for flash effect
        PlayAudio(seq[i]);
    },(i)*1000+100);
    setTimeout(()=>{
        $("#"+seq[i]).removeClass("animate")
    },(i+1)*1000);
}

function PlayAudio(evt){
    var audio = new Audio("sounds/"+evt+".mp3");
    audio.play();
}

function startOver(){
    seq=[];
    count = 0;
    clicks = 0;
    level = 0;
    $("h1").text("Press any color to start the game");
}

function LetsPlay(evt){
    
    //debugger
    if(level == 0){
       seq.push(evt.id);
       count++;
       clicks++;
    }
    else if(evt.id != seq[clicks++]){                            //Game Over!!!
          
          var audio = new Audio("sounds/"+"wrong"+".mp3");
          audio.play();
          $("body").addClass("game-over");
          setTimeout(function(){
              $("body").removeClass("game-over")
          },300);
          $("h1").text( "Game Over, Press Any Key to Restart");
          document.addEventListener("keyup",function(){
              startOver();
          })
          return;
    }
    if(clicks==count){                                          //Next Level
        var randval = Math.floor(Math.random()*4);              //Generating next color
        seq.push(colors[randval]);
        count++;
        level++;
        clicks = 0;
        $("h1").text("LEVEL "+level);
        for(var i=0;i<seq.length;i++)
           highlight(i);
       }
}



for(var i=0;i<list.length;i++){
    list[i].addEventListener("click",function(){
        var id = this.id;
        $("#"+this.id).addClass("pressed");                   //to show an effect when user clicks on a specific tile
        setTimeout(function(){
            $("#"+id).removeClass("pressed");
        },300);
        PlayAudio(this.id);
        LetsPlay(this);
    });
}