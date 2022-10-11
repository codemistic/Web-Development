let secondsHand = document.querySelector(".seconds-hand");
let minutesHand = document.querySelector(".minutes-hand");
let hoursHand = document.querySelector(".hours-hand");

function getTime(){
    let now = new Date();
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()
   
    let timeInterval = 6;
    
    secondsHand.style.transform = 'rotate(' + (seconds *  timeInterval) + 'deg)';
    minutesHand.style.transform = 'rotate(' + (minutes* timeInterval + seconds/10) + 'deg)';
    hoursHand.style.transform = 'rotate(' + (hours*30 + minutes/2) + 'deg)';

}
setInterval(getTime, 100)

