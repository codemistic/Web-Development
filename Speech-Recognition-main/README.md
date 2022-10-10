## Speech Recognition (Speech to Text)
A Speech Recognition Web App that converts speech to text in real time built using Web Speech API. SpeechRecognition interface was used which provides the ability to recognize voice context from an audio input (normally via the device's default speech recognition service) and respond appropriately.

The site is live at : https://speech2text.netlify.app/

<a target="_blank" href="https://speech2text.netlify.app/">
          <img src="https://github.com/rahulkarda/Speech-Recognition/blob/main/images/speech2text.jpg?raw=true" width="100%" alt="Speech To Text Converter"/>
</a>
<br>

## Tech Stack
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=css3&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-Bootstrap-informational?style=flat&logo=bootstrap&logoColor=white&color=brightgreen)

[Bootstrap](https://getbootstrap.com/) is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.

[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) enables you to incorporate voice data into web apps. The Web Speech API has two parts: SpeechSynthesis (Text-to-Speech), and SpeechRecognition (Asynchronous Speech Recognition.). SpeechRecognition interface, which provides the ability to recognize voice context from an audio input (normally via the device's default speech recognition service) and respond appropriately.

## Interface Used
  <h3>Speech Recognition</h3>
    
  1. SpeechRecognition - The controller interface for the recognition service; this also handles the SpeechRecognitionEvent sent from the recognition service.
  2. SpeechRecognitionEvent - The event object for the result and nomatch events, and contains all the data associated with an interim or final speech recognition          result.
  3. SpeechGrammar - The words or patterns of words that we want the recognition service to recognize.
  4. SpeechRecognitionResult - Represents a single recognition match, which may contain multiple SpeechRecognitionAlternative objects.
  5. SpeechRecognitionResultList - Represents a list of SpeechRecognitionResult objects, or a single one if results are being captured in continuous mode.

## Optimizations
While improve this project, I would start by implementing the following features -

   1. Adding support for more languages  
   2. Solving Browser compatibility issues
              
## Lessons Learned
My learning was focused on making the use of Web Speech API and to create a simple UI where user can select a language and start Speech Recognition to convert the speech to text. Learned how the Web Speech API works and differnece between SpeechSynthesis (Text-to-Speech), and SpeechRecognition (Asynchronous Speech Recognition.).
