const btnToggleComponentList = document.querySelector("#toggle-component-list");
const componentList = document.querySelector("#component-list");
const btnOpenNav = document.querySelector("#btn-open-doc-nav");
const btnCloseNav = document.querySelector("#btn-close-doc-nav");
const btnOpenIndNav = document.querySelector("#btn-open-ind-nav");
const btnCloseIndNav = document.querySelector("#btn-close-ind-nav");

const docNav = document.querySelector("#doc-nav");
const indNav = document.querySelector("#ind-nav");

/*Utils*/
const toggleInnerText = (ele, stringOne, stringTwo) =>
  (ele.innerText = ele.innerText === stringOne ? stringTwo : stringOne);
btnToggleComponentList.addEventListener("click", () => {
  componentList.classList.toggle("mob-display-none");
  toggleInnerText(btnToggleComponentList, "↑", "↓");
});

const customEventListener = (element, eventType, cb) => {
  element.addEventListener(eventType, cb);
};

customEventListener(btnOpenNav, "click", () =>
  docNav.classList.remove("display-none")
);
customEventListener(btnCloseNav, "click", () =>
  docNav.classList.add("display-none")
);

customEventListener(btnOpenIndNav, "click", () =>
  indNav.classList.remove("display-none")
);

customEventListener(btnCloseIndNav, "click", () =>
  indNav.classList.add("display-none")
);
