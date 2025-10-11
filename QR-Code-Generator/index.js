const qrFormEl = document.getElementById("qrForm");
const qrImageEl = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputTextEl = document.getElementById("qrInputText");
const generateButtonEl = document.getElementById("generateButton");

const renderQRCode = (url) => {
  if (!url) {
    return;
  }
  generateButtonEl.innerText = "Generating QR Code...";
  qrImageEl.src = url;

  const onImageLoad = () => {
    const interval = setInterval(() => {
      qrContainerEl.classList.add("show");
      clearInterval(interval);
      generateButtonEl.innerText = "Genrated QR Code";
    }, 500);
  };

  qrImageEl.addEventListener("load", onImageLoad);
};

qrFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(qrFormEl);
  const text = formData.get("qrText");
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

  renderQRCode(qrCodeUrl);
});
qrInputTextEl.addEventListener("keyup", () => {
  if (!qrInputTextEl.value.trim()) {
    qrContainerEl.classList.remove("show");
  }
});
