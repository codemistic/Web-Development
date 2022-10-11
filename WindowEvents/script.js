// determine if this is a touch-capable device
const isTouchDevice =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;
console.log(`isTouchDevice: ${isTouchDevice ? "TRUE" : "FALSE"} `);

const button = document.getElementById("btnClear");
const divEvents = document.getElementById("divEvents");
const olEvents = document.getElementById("olEvents");
const divBottom = document.getElementById("divBottom");

// handle "clear history" button click
button.addEventListener("click", function () {
  if (isTouchDevice) {
    // simulate click on button using `focus` and `blur`
    button.focus();
    setTimeout(() => button.blur(), 500);
  }
  olEvents.innerHTML = "";
});

const eventNames = [
  "load",
  "focus",
  "blur",
  "change",
  "close",
  "error",
  "haschange",
  "message",
  "offline",
  "online",
  "pagehide",
  "pageshow",
  "popstate",
  "resize",
  "submit",
  "unload",
  "beforeunload",
];
eventNames.forEach(function (eventName) {
  window.addEventListener(eventName, function (evt) {
    const now = new Date();
    const timeStr =
      now.getHours().toString().padStart(2, "0") +
      ":" +
      now.getMinutes().toString().padStart(2, "0") +
      ":" +
      now.getSeconds().toString().padStart(2, "0") +
      "." +
      now.getMilliseconds();
    let li = document.createElement("li");
    li.innerHTML = timeStr + " - " + `<code>${evt.type}</code>`;
    olEvents.appendChild(li);

    if (
      document.body.contains(
        document.getElementById("pseudo-id-placeholder-123")
      )
    ) {
      console.log(timeStr + "_" + eventName);
    }
    // scroll to bottom
    // window.scrollTo(0, divBottom.offsetTop);
    const bottomOffset = divBottom.offsetTop;
    divEvents.scrollTop = bottomOffset - 10;
  });
});
