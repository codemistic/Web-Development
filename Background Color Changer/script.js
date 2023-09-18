const btn = document.querySelector("button");

let color = [
  "#222f3e",
  "#f368e0",
  "#ee5353",
  "#6c55cc",
  "#24ffff",
  "#ff2626",
  "#ffffff",
  "#000000",
  "#7878ff",
  "#cdcdcd",
  "#454545",
  "#909090",
  "#cccddd",
  "#0abde3",
  "#10ac84",
  "#5f27cd",
];
let i = 0;

btn.addEventListener("click", () => {
  if (i <= color.length - 2) {
    i++;
    document.body.style.background = `${color[i]}`;
  } else {
    i = 0;
    document.body.style.background = `${color[i]}`;
  }
});
