let a, date, day, times;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined,options);
  times = a.toLocaleTimeString();
  //day =a.toLocaleString();
  document.getElementById("time").innerHTML = times + " on " + date;
}, 1000);
