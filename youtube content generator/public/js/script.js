// COPY OPTION
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Copy", 1000);
  });
}