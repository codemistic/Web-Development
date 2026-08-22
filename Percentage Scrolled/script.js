var scrolledBar = document.getElementById("scrolled");



// This function will return the maximum of the following 
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.body.offsetHeight, D.body.clientHeight
    );
}



var docHeight = getDocHeight();
var windowHeight = window.innerHeight;

window.onresize = function (e) {
    docHeight = getDocHeight();
    windowHeight = window.innerHeight;
};



// This function uses a for loop for individual progress bars. You can modify it so that it applies to the whole skill section at once
function setScrolled() {
    
    var scrolled = Math.floor((window.scrollY/(docHeight-windowHeight))*100);
    
    scrolledBar.innerText = scrolled;
    
}



window.addEventListener("scroll", setScrolled);