window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  document.querySelector('#eng').addEventListener('click',eng);
  document.querySelector('#hi').addEventListener('click',hi);
  function eng(){
      recognition.lang = 'en-in';
      // recognition.start();
      console.log('Language Selected: English')
    }
    function hi(){
        recognition.lang = 'hi';
        // recognition.start();
        console.log('Language Selected: Hindi');
}
  
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      p.textContent = poopScript;

      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
  });

  recognition.start();
  recognition.addEventListener('end', recognition.start);
  document.querySelector('#start').addEventListener('click',start);
  document.querySelector('#stop').addEventListener('click',stop);
  function start(){
      recognition.start();
      console.log('Speech recognition has started.');

  }
  function stop(){
    recognition.stop();
    console.log('Speech recognition has stopped.');
}
