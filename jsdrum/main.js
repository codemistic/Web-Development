//  window.addEventListener('keydown', function(e) {
//     //    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
//        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//        if (!audio) return;
//     audio.play();
//     audio.currentTime = 0;
//     console.log(audio);
// });

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing'); //changing the class of key div 
    audio.currentTime = 0; // it starts the music before the end of previous music
    audio.play();
  }

  // the e represents event , here the key of keyboard keyCode is the property of event e 
   
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


  window.addEventListener('keydown', playSound); //eventlistnersyntax addEventListener('event (i.e click ,keypress .key down  )  , function due to that event ', playSound);