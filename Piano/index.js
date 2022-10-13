let pianoKeys = document.querySelectorAll(".key");

pianoKeys.forEach((pianoKey, i) => {
    let number = i < 9 ? "0" + (i + 1) : (i+1)
    // let newUrl = ;
    pianoKey.addEventListener("click", function (newUrl) {
        new Audio("pianoKey/key" + number + ".mp3").play();
    })

    
});

// pianoKeys.forEach((pianoKey, i) => {
//     let number = i < 9 ? "0" + (i + 1) : (i+1)
//     pianoKey.addEventListener("click", function () {
//     classList.add("pressed");
//     })

    
// });
