const crypt = new Map([
    ["a", "._"],
    ["b", "_..."],
    ["c", "_._."],
    ["d", "_.."],
    ["e", "."],
    ["f", ".._."],
    ["g", "__."],
    ["h", "...."],
    ["i", ".."],
    ["j", ".___"],
    ["k", "_._"],
    ["l", "._.."],
    ["m", "__"],
    ["n", "_."],
    ["o", "___"],
    ["p", ".__."],
    ["q", "__._"],
    ["r", "._."],
    ["s", "..."],
    ["t", "_"],
    ["u", ".._"],
    ["v", "..._"],
    ["w", ".__"],
    ["x", "_.._"],
    ["y", "_.__"],
    ["z", "__.."],
    [' ', '/'],
]);
const reversed = new Map([
    ["._", "a"],
    ["_...", "b"],
    ["_._.", "c"],
    ["_..", "d"],
    [".",
        "e"],
    [".._.", "f"],
    ["__.", "g"],
    ["....", "h"],
    ["..", "i" ],
    [".___", "j"],
    ["_._", "k"],
    ["._..","l" ],
    ["__", "m"],
    ["_.", "n"],
    ["___", "o"],
    [".__.", "p"],
    ["__._", "q"],
    ["._.", "r" ],
    ["...", "s" ],
    ["_", "t" ],
    [".._", "u"],
    ["..._", "v" ],
    [".__", "w" ],
    ["_.._", "x" ],
    ["_.__", "y"],
    ["__..", "z"],
    ['/', ' '],
]);


// Translate english word to morse code
function translateWord(word) {
    firstletter = ""
    for (let i = 0; i < word.length - 1; i++) {
        firstletter += crypt.get(word[i])
        firstletter += " "
    }
    firstletter += crypt.get(word[word.length - 1])
    return firstletter

}

// makes translator appear

function encryptWord() {
    word = document.getElementById("inputWord").value
    document.getElementById("translateWord").value = translateWord(word)
}


function translateCode(code) {
    translation = " "
    splitCode = code.split(" ")
    for (let i = 0; i < splitCode.length; i++){
        translation += reversed.get(splitCode[i])
    }
    return translation
}

// makes the english word appear
function encryptCode() {
    word = document.getElementById("inputCode").value
    document.getElementById("translateCode").value = translateCode(word)
}