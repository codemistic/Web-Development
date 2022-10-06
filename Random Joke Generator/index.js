let quotes = document.getElementById("quotes");
let writer = document.getElementById("writer");
let btn = document.getElementById("btn");

const url = "https://official-joke-api.appspot.com/jokes/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quotes.innerText = item.setup;
      writer.innerText = item.punchline;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);