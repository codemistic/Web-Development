   
   window.addEventListener('keydown', function (e) {
    let audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    
    if(audio==null) return;    // Stops the function from running if we press any ir-releveant key
    audio.currentTime= 0;  // To rewind the song if we press the key Again
    audio.play();
    console.log('we are at 1'); 

    // Now Adding class Playing 

    let grab= document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    grab.classList.add('playing');   // Adding Class Playing 
        

    // PAUSE 
    // ---------------

    window.addEventListener('keydown', function(e){
        let pause = e.keyCode;
        if(pause == 80){
        audio.pause();
        grab.classList.remove('playing');
        }
    });
    // ----------------

    // Click to Play
    


    // Removing transition when audio ends 

    function removeTransition(e){
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }


});
