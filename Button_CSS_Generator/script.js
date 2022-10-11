// output button
var OutputBtn = document.querySelector("#btn");

//INPUT FIELDS

// colors
var bgColor = document.querySelector("#BGCOLOR");
var fColor = document.querySelector("#FCOLOR");
var brColor = document.querySelector("#BRCOLOR");

//size
var brSize = document.querySelector("#BRSIZE");
var fSize = document.querySelector("#FSIZE");

//border-style
var BorderStyle = document.getElementsByName("borderStyle");
// var radios = document.querySelectorAll()

//margin
var tMargin = document.querySelector("#TMARGIN");
var rMargin = document.querySelector("#RMARGIN");
var bMargin = document.querySelector("#BMARGIN");
var lMargin = document.querySelector("#LMARGIN");

//padding
var tPadding = document.querySelector("#TPADDING");
var rPadding = document.querySelector("#RPADDING");
var bPadding = document.querySelector("#BPADDING");
var lPadding = document.querySelector("#LPADDING");

//borderRadius
var tlRadius = document.querySelector("#TLRADIUS");
var trRadius = document.querySelector("#TRRADIUS");
var brRadius = document.querySelector("#BRRADIUS");
var blRadius = document.querySelector("#BLRADIUS");

var copyBtn = document.querySelector(".copyToClipboard");

var valObj = {
  bgColor: "#2d63c8",
  fColor: "#ffffff",
  brColor: "#2d63c8",
  brSize: "1",
  fSize: "25",
  BorderStyle: "solid",
  tMargin: "0",
  rMargin: "0",
  bMargin: "0",
  lMargin: "0",
  tPadding: "15",
  rPadding: "40",
  bPadding: "15",
  lPadding: "40",
  tlRadius: "0",
  trRadius: "0",
  brRadius: "0",
  blRadius: "0",
};

bgColor.addEventListener("change", function () {
  valObj.bgColor = bgColor.value;
  updateBtn();
  updateText();
});
fColor.addEventListener("change", function () {
  valObj.fColor = fColor.value;
  updateBtn();
  updateText();
});
brColor.addEventListener("change", function () {
  valObj.brColor = brColor.value;
  updateBtn();
  updateText();
});
brSize.addEventListener("change", function () {
  valObj.brSize = brSize.value;
  updateBtn();
  updateText();
});
fSize.addEventListener("change", function () {
  valObj.fSize = fSize.value;
  updateBtn();
  updateText();
});
setInterval(() => {
  for (i = 0; i < BorderStyle.length; i++) {
    if (BorderStyle[i].checked) {
        // console.log("hii");
      valObj.BorderStyle = BorderStyle[i].value;
      updateBtn();
      updateText();
    }
  }
}, 500);
tMargin.addEventListener("change", function () {
  valObj.tMargin = tMargin.value;
  updateBtn();
  updateText();
});
rMargin.addEventListener("change", function () {
  valObj.rMargin = rMargin.value;
  updateBtn();
  updateText();
});
bMargin.addEventListener("change", function () {
  valObj.bMargin = bMargin.value;
  updateBtn();
  updateText();
});
lMargin.addEventListener("change", function () {
  valObj.lMargin = lMargin.value;
  updateBtn();
  updateText();
});
tPadding.addEventListener("change", function () {
  valObj.tPadding = tPadding.value;
  updateBtn();
  updateText();
});
rPadding.addEventListener("change", function () {
  valObj.rPadding = rPadding.value;
  updateBtn();
  updateText();
});
bPadding.addEventListener("change", function () {
  valObj.bPadding = bPadding.value;
  updateBtn();
  updateText();
});
lPadding.addEventListener("change", function () {
  valObj.lPadding = lPadding.value;
  updateBtn();
  updateText();
});
tlRadius.addEventListener("change", function () {
  valObj.tlRadius = tlRadius.value;
  updateBtn();
  updateText();
});
trRadius.addEventListener("change", function () {
  valObj.trRadius = trRadius.value;
  updateBtn();
  updateText();
});
brRadius.addEventListener("change", function () {
  valObj.brRadius = brRadius.value;
  updateBtn();
  updateText();
});
blRadius.addEventListener("change", function () {
  valObj.blRadius = blRadius.value;
  updateBtn();
  updateText();
});

// OutputBtn.addEventListener("click", function () {
//   console.log(valObj);
//   showChange();
// });

function showChange() {
  OutputBtn.style.background = "red";
  OutputBtn.style.color = "white";
}

window.onload = function () {
  //inputs default set
  bgColor.value = valObj.bgColor;
  fColor.value = valObj.fColor;
  brColor.value = valObj.brColor;
  brSize.value = valObj.brSize;
  fSize.value = valObj.fSize;
  BorderStyle.value = valObj.BorderStyle;
  tMargin.value = valObj.tMargin;
  rMargin.value = valObj.rMargin;
  bMargin.value = valObj.bMargin;
  lMargin.value = valObj.lMargin;
  tPadding.value = valObj.tPadding;
  rPadding.value = valObj.rPadding;
  bPadding.value = valObj.bPadding;
  lPadding.value = valObj.lPadding;
  tlRadius.value = valObj.tlRadius;
  trRadius.value = valObj.trRadius;
  brRadius.value = valObj.brRadius;
  blRadius.value = valObj.blRadius;

  //button default set
  updateBtn();
  updateText();
};

var text = "";

function updateText() {
  text = `
background-color: ${valObj.bgColor};
color: ${valObj.fColor};
border-color: ${valObj.brColor};
border-width: ${valObj.brSize + "px"};
font-size: ${valObj.fSize + "px"};
border-style: ${valObj.BorderStyle};
margin-top: ${valObj.tMargin + "px"};
margin-right: ${valObj.rMargin + "px"};
margin-bottom: ${valObj.bMargin + "px"};
margin-left: ${valObj.lMargin + "px"};
padding-top: ${valObj.tPadding + "px"};
padding-right: ${valObj.rPadding + "px"};
padding-bottom: ${valObj.bPadding + "px"};
padding-left: ${valObj.lPadding + "px"};
border-top-left-radius: ${valObj.tlRadius + "px"};
border-top-right-radius: ${valObj.trRadius + "px"};
border-bottom-right-radius: ${valObj.brRadius + "px"};
border-bottom-left-radius: ${valObj.blRadius + "px"};
`;
}
//clipboard function
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
});

// setting values to btn
function updateBtn() {
  OutputBtn.style.background = valObj.bgColor;
  OutputBtn.style.color = valObj.fColor;
  OutputBtn.style.borderColor = valObj.brColor;
  OutputBtn.style.borderWidth = valObj.brSize + "px";
  OutputBtn.style.fontSize = valObj.fSize + "px";
  OutputBtn.style.borderStyle = valObj.BorderStyle;
  OutputBtn.style.marginTop = valObj.tMargin + "px";
  OutputBtn.style.marginRight = valObj.rMargin + "px";
  OutputBtn.style.marginBottom = valObj.bMargin + "px";
  OutputBtn.style.marginLeft = valObj.lMargin + "px";
  OutputBtn.style.paddingTop = valObj.tPadding + "px";
  OutputBtn.style.paddingRight = valObj.rPadding + "px";
  OutputBtn.style.paddingBottom = valObj.bPadding + "px";
  OutputBtn.style.paddingLeft = valObj.lPadding + "px";
  OutputBtn.style.borderTopLeftRadius = valObj.tlRadius + "px";
  OutputBtn.style.borderTopRightRadius = valObj.trRadius + "px";
  OutputBtn.style.borderBottomRightRadius = valObj.brRadius + "px";
  OutputBtn.style.borderBottomLeftRadius = valObj.blRadius + "px";
}

