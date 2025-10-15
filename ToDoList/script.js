let today = new Date();
var date = today.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
});
var day = today.toLocaleString("en-GB", {weekday: "long"});
var dat = document.getElementById("date");
var da = document.getElementById("day");
dat.textContent = "Date:   " + date;
da.textContent = "Day:   " + day;
var t=document.getElementById("addtasky").addEventListener("click", addtask);
function addtask(){
    document.querySelector(".inputs").style.display = "block";

}

