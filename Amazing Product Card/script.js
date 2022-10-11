const cardcontainer = document.querySelector(".cardcontainer");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");

color2.addEventListener("click", () => {
  cardcontainer.classList.add("change");
});

color1.addEventListener("click", () => {
  cardcontainer.classList.remove("change");
});