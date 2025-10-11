//Hello World of Phaser = Basic Game = Single Scene in Spin & Win Game
//How to create the basic skeleton for the game -> Game Loop

let prizes_config = {
    count:12,
    prize_names : ["TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","ELEVEN", "TWELVE","ONE"],
}



let config = {
    type : Phaser.CANVAS,
    width : 800,
    height:800,
    backgroundColor : 0xffcc00,
    
    scene : {
        preload : preload,
        create : create,
        // update : update,
    }
   
};
let game = new Phaser.Game(config);

function preload(){
    console.log("Preload");
    //load object, load some images
    this.load.image('background','Assets/screen.jpg');
    console.log(this);
    this.load.image('wheel','Assets/wheelin.png');
    this.load.image('pin','Assets/pinin.png');
    this.load.image('stand','Assets/stnd.png');
    // this.load.image('button','Assets/button.ico');
       
}
function create(){
    console.log("Create");

    //buttons
    // <button onclick="spinwheel()">Click me</button>
    // this.load.onClick('spinwheel();');

    //create the background image
    let W = game.config.width;
    let H = game.config.height;
    
    let background = this.add.sprite(0,0,'background');
    background.setPosition(W/2,H/2);
    background.setScale(0.16);

     //lets create the stand
    let stand = this.add.sprite(W/2,H/2,'stand');
    stand.setScale(1);
    

    //lets create a pin
    let pin = this.add.sprite(W/2,H/2,"pin");
    pin.setScale(1);
    pin.depth = 1;
    
    //let create wheel
    this.wheel = this.add.sprite(W/2,H/2,"wheel");
    this.wheel.setScale(0.215); 
    //this.wheel.alpha = 0.5;
    
    

    // the game has just started = we can spin the wheel
    this.canSpin = true;
    
    //event listener for mouse click
    this.input.on("pointerdown",spinwheel,this);
    
    //lets create text object
    font_style = {
        font : "bold 30px Arial",
        align : "center",
        color : "red",
    }
    this.game_text = this.add.text(50,750,"!!CLICK TO SPIN & GET LUCKY NUMBER!!",font_style);
    
    
    
}
document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});
//Game Loop
// function update(){
//     console.log("Inside Update");
//     //this.wheel.angle += 1;
// }
let tick = new Audio('Assets/tick.mp3');
let clap = new Audio('Assets/clap.mp3');
let gametune = new Audio('Assets/tune.mp3');

function spinwheel(check){

    // can we spin the wheel?
    if(this.canSpin){

        //clap pause here
        clap.pause();
        // star 
        tick.play();

        //game tune
        gametune.play();

        //player cannot spin 
        this.canSpin=false;

        console.log("You clicked the mouse");
        console.log("Start spinning");
        //this.game_text.setText("You clicked the mouse!");
        
        let rounds = Phaser.Math.Between(2,4);
        let degrees = Phaser.Math.Between(0,11)*30;
        
        let total_angle = rounds*360 + degrees;
        console.log(total_angle);
        
        let idx = prizes_config.count - 1 - Math.floor(degrees/(360/prizes_config.count));
        
        
        tween = this.tweens.add({
            targets: this.wheel,
            angle: total_angle, 
            ease: "Cubic.easeOut",
            duration: 6000,
            callbackScope:this,
            onComplete:function(){

                //pause game tune
                // gametune.pause();

                //clap play here
                clap.play();
                this.game_text.setText("You got : " + prizes_config.prize_names[idx]);
                // clap.pause();
                // player can spin again
                this.canSpin=true;
                // clap.play();
            },
        });
    }
}