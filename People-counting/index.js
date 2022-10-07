let countEl = document.getElementById("count-el");
let count = 0;
let counts = document.getElementById("saved-numbers");

function increment() {
  count += 1;
  countEl.innerText = count;
}

let s = "Previous Entries : ";
function save() {
  s += count + " - ";
  counts.innerText = s;
  count = 0;
  countEl.innerText = count;
}
