const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
selectTag = document.querySelectorAll("select"),
translateBtn = document.querySelector("button"),
exchangeIcon = document.querySelector(".exchange"),
icons = document.querySelectorAll(".row i");

selectTag.forEach((tag, id) => {
    // console.log(tag);
    for (let country_code in countries) {    
        // console.log(country_code);
        // console.log(countries[country_code]);

        // Selecting English by default as From language and Hindi as To language
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option); // adding option tag inside select tag
    }
});

exchangeIcon.addEventListener("click", () => {
    // exchanging textarea and select tag values 
    let tempText = fromText.value;
    fromText.value = toText.value;
    toText.value = tempText;
    tempLang = selectTag[0].value;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
}); 

translateBtn.addEventListener("click", () => {
    let text = fromText.value;
    translateFrom = selectTag[0].value;  // getting fromSelect tag value
    translateTo = selectTag[1].value;    // getting toSelect tag value
    // console.log(text, traslateFrom, traslateTo);
    if(!text) return;
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    // fetching api response and returning it with parsing into js obj
    // and in another then method receiving that obj
    fetch(apiUrl).then(res => res.json()).then(data => {
        // console.log(data);
        // console.log(apiUrl);
        toText.value = data.responseData.translatedText;
        toText.setAttribute("placeholder", "Translation");
    });
});

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        // console.log(target);
        if(target.classList.contains("fa-copy")) {
            // if clicked icon has from id, copy the fromTextarea avlue else copy toTextarea value
            if(target.id == "from") {
                // console.log("From copy icon clicked");
                navigator.clipboard.writeText(fromText.value);
            } else {
                // console.log("To copy icon clicked");
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            // if clicked icon has from id, speak the fromTextarea else speak toTextarea value
            if(target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;    // setting utterance language to fromSelect tag value
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;    // setting utterance language to toSelect tag value
            }
            speechSynthesis.speak(utterance);   // speak the passed utterance
            // console.log("Speech icon clicked");
        }
    });
});