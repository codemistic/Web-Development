setInterval(setTime, 1000);

function setTime(){
    let currentTime = new Date();
    let secondRatio = currentTime.getSeconds() / 60;
    let minuteRatio = ( secondRatio + currentTime.getMinutes()) / 60;
    let hourRatio = ( minuteRatio + currentTime.getHours()) / 12;

    rotateHand( document.querySelector(".second"), secondRatio );
    rotateHand( document.querySelector(".minute"), minuteRatio );
    rotateHand( document.querySelector(".hour"), hourRatio );
}

function rotateHand(hand, degree){
    hand.style.transform = `rotate(${degree * 360}deg)`;
}

setTime();