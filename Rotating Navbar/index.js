const nav = document.getElementsByClassName("nav")[0];
const page = document.getElementsByClassName("page")[0];
const navbar = document.getElementsByClassName("navbar")[0].children[0];
var img = document.getElementById("image");
var img1 = "images/1.png";
var img2 = "images/2.png";

let currentTab = 0;

nav.addEventListener("click", ()=>{
    currentTab ++;
    if(currentTab % 2 == 0){
        page.className = "page";
        nav.className = "nav";
        navbar.className = " close"
        
    }   
    else{
        page.className += " tilt";
        nav.className += " show-cross-icon"
        navbar.className = " show"

    }
    console.log(currentTab);
})
