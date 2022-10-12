// console.log("Script is working");

// var username=prompt("what is your name??");
// alert("Welcome "+username);

var btn_translate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var txtOutput=document.querySelector("#txtoutput");

var urll= "https://api.funtranslations.com/translate/minion.json"

function url (text){
  var completeURL= urll+"?"+"text="+text;
  return completeURL;
}



// txtOutput.innerText ="we can do this";

// console.log(txtInput);

btn_translate.addEventListener ("click", function clickEventHandler(){
// console.log("clicked!");
//console.log("something"+txtInput.value);
//txtOutput.innerText="something "+txtInput.value;
fetch(url(txtInput.value))
  .then(response => response.json())
  .then(json => {
    var translated = json.contents.translated;
    txtOutput.innerText=translated;
  })
   

});

// textarea for tag
// .btn-primary for class
// #input-button for id
// input[name="translator"]


