const secondhand=document.querySelector('.secondhand');
const minutehand=document.querySelector('.hourhand');
const audio = document.querySelector('.audio');
function setdate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const a = (seconds*6);
    console.log(a);

    
    secondhand.style.transform = `rotate(${a}deg)`;
    audio.play();
    audio.currentTime = 1;
    
    
    
    //using properties that have : , :is replaced by = and than the ahead part comes in backticks 
    //whenever you are writing a varible const use ${} and whenever you use ${} you must use `` backtics (i.e esc down button) to close your brackets 
    // how to change the class of an elemt by js , make that new class in css and use   elementconstname.classList.add('newstyleclassname'); 
    
}

function setminute() {
    const now = new Date();
    
    const minutes = now.getMinutes();
    const m = ((minutes*6)-90);
    console.log(m);

    
    minutehand.style.transform = `rotate(${m}deg)`;
    
    //using properties that have : , :is replaced by = and than the ahead part comes in backticks 
    //whenever you are writing a varible const use ${} and whenever you use ${} you must use `` backtics (i.e esc down button) to close your brackets 
    // how to change the class of an elemt by js , make that new class in css and use   elementconstname.classList.add('newstyleclassname'); 
    
}

setInterval(setdate,1000);
setInterval(setminute,1000);

//syntax for setinterval is setInterval(functionname, milli seconds after which you want to reoperate the function )
