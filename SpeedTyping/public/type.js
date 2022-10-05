// Restrict Keydown values to only letters, special characters and backspace and no.s



var displayQuote = document.querySelector("h6");
var url = "https://api.quotable.io/random";
var quoteStr = "";
var arrayQuote;
var correct = true;
var errorList = [];
var str = "";
var prevSpan;

async function fetchQuote() {
    const result = await fetch(url);
    const data = await result.json();
    return data.content;
}

document.body.addEventListener("keydown", (e) => {
    // console.log('');
    // console.log(e.key);
    let specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let lettersAndSpaces = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    // console.log('letter abd spaces', lettersAndSpaces.includes(e.key));
    // console.log('special Characters', specialCharacters.test(e.key));
    if (e.key != 'Shift') {
        console.log('Previous Span HTML', prevSpan);
        if (e.key === "Backspace" && prevSpan != null) {
            prevSpan.classList.remove("correct");
            prevSpan.classList.remove("incorrect");
            prevSpan.classList.remove("for-space");
            // Space Validation

            if (prevSpan.classList.contains("underline-space-incorrect")) {

                prevSpan.innerText = ' ';
            }
            // console.log('prevSpan after backspace:', prevSpan);
            str = str.slice(0, str.length - 1);
            prevSpan = arrayQuote[str.length - 1];
            console.log('str after backspace:', str);
            // console.log('prevSpan after backspace:', prevSpan);
        }

        else {

            // if the key pressed is an alphabet/number/special character/space/Backspace

            if ((str.length > 0 && e.key === 'Backspace') || lettersAndSpaces.includes(e.key) || specialCharacters.test(e.key)) {
                str = str + e.key;
                // the html tag that holds the character
                var characterSpan = arrayQuote[str.length - 1];
                prevSpan = characterSpan;
                console.log("Current Span HTML :", characterSpan, str[str.length - 1], str.length, quoteStr.length);

                if (str[str.length - 1] === quoteStr[str.length - 1]) {
                    characterSpan.classList.add("correct");
                    characterSpan.classList.remove("incorrect");
                    errorList[str.length - 1] = true;
                } else {
                    if (quoteStr[str.length - 1] === ' ') {
                        characterSpan.classList.add("for-space");
                    }
                    else {
                        characterSpan.classList.remove("correct");
                        characterSpan.classList.add("incorrect");
                    }
                    errorList[str.length - 1] = false;
                }
            }
        }

        if (str.length == quoteStr.length) {
            let count = 0;
            errorList.forEach((condition) => {
                if (condition == true) count++;
            });
            if (count == errorList.length) renderQuote();
            else console.log("Remove the error!");
        }
    }
});

function setQuoteObjToString() {
    arrayQuote = displayQuote.querySelectorAll("span");
    arrayQuote.forEach((characterSpan) => {
        quoteStr += characterSpan.innerText;
    });
    console.log(quoteStr);
}

async function renderQuote() {
    quoteStr = "";
    str = "";
    prevSpan = null;
    const q = await fetchQuote();
    displayQuote.innerText = "";
    // console.log(q);
    q.split("").forEach((element, index) => {
        var characterSpan = document.createElement("span");
        characterSpan.innerText = element;
        errorList[index] = false;
        displayQuote.appendChild(characterSpan);
    });
    setQuoteObjToString();
}

renderQuote();
