let taskbar = document.getElementsByClassName("taskbar");
let startmenu = document.getElementsByClassName("startmenu");

// taskbar.addEventListener("click",()=>{
//     console.log("clicked");
//     if(startmenu.style.bottom=="50px"){
//         startmenu.style.bottom = "-650px"
//     }
//     else{
//         startmenu.style.bottom = "50px"
//     } 
// }
taskbar[0].addEventListener("click",()=>{
    console.log("clicked");
    if(startmenu[0].style.bottom=="50px"){
        startmenu[0].style.bottom = "-650px"
    }
    else{
        startmenu[0].style.bottom = "50px"
    }
})