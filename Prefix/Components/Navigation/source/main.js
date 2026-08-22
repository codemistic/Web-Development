const mediaQueryTablet = window.matchMedia("(max-width:768px)");

mediaQueryTablet.addEventListener("change", (event) =>
  event.matches ? console.log("yes") : console.log("no")
);
const btnNavToggle = document.querySelector("#btn-nav-toggle")