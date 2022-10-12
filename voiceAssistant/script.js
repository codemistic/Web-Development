// UI
const chatBoxContainer = document.querySelector(".chatBox__container");
const closeBtn = document.querySelector(".chatBox__closeBtn");
const handleClose = () => {
  chatBoxContainer.style.transform = "scale(0)";
};
const handleOpen = () => {
  if (
    !chatBoxContainer.style.transform ||
    chatBoxContainer.style.transform === "scale(1)"
  )
    chatBoxContainer.style.transform = "scale(0)";
  else chatBoxContainer.style.transform = "scale(1)";
};

// Speech Recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognizer = new SpeechRecognition();
recognizer.onstart = () => {
  console.log("Started Listening...");
};
recognizer.onend = () => {
  console.log("Stopped Listening...");
};
recognizer.onresult = (e) => {
  const command = e.results[0][0].transcript;
  processCommand(command);
};
const listenSpeech = () => {
    recognizer.start();
};

// Speech Synthesis
const utterance = new SpeechSynthesisUtterance();
window.speechSynthesis.onvoiceschanged = () => {
  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices[12];
};
utterance.onstart = () => {
  console.log("Started Speaking...");
};
utterance.onend = () => {
  console.log("Stopped Speaking...");
};
const saySpeech = (speech) => {
  utterance.text = speech;
  window.speechSynthesis.speak(utterance);
};

// Speech Processing
const processCommand = (command) => {
  saySpeech(command);
  // process command
};
