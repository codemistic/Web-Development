const body = document.querySelector('body');
const cssCode = document.querySelector('.css-code');
const leftColor = document.querySelector('.left-color');
const rightColor = document.querySelector('.right-color');
const randomColor = document.querySelector('.random');
const copy = document.querySelector('i');
const deg = document.querySelector('.deg');

let lColor = leftColor.value;;
let rColor = rightColor.value;;

leftColor.addEventListener("change", () => {
    console.log(leftColor.value);
    lColor = leftColor.value;
    changeBackground(90, lColor, rColor);
});
rightColor.addEventListener("change", () => {
    console.log(rightColor.value);
    rColor = rightColor.value;
    changeBackground(90, lColor, rColor);
});
randomColor.addEventListener("click", () => {
    let color = '0123456789abcdef';
    lColor = '#';
    rColor = '#';
    for (let i = 0; i < 6; i++) {
        let num = (Math.floor(Math.random() * 1000)) % 16;
        lColor += color[num];
    }
    for (let i = 0; i < 6; i++) {
        let num = (Math.floor(Math.random() * 1000)) % 16;
        rColor += color[num];
    }
    console.log(lColor, rColor);
    leftColor.value = lColor;
    rightColor.value = rColor;
    changeBackground(90, lColor, rColor);
});
copy.addEventListener("click", () => {
    var r = document.createRange();
    r.selectNode(cssCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Gradient Code Copied');
});

function change() {
    console.log("Hi");
    console.log(deg.value);
    if (deg.value == '') deg.value = 90;
    changeBackground(deg.value, lColor, rColor);
}



function changeBackground(num, lColor, rColor) {
    const Code = `linear-gradient(${num}deg, ${lColor}, ${rColor})`;
    console.log(Code);
    body.style.background = Code;
    cssCode.textContent = `background: ${Code};`
}