"use strict";
const alertTextList = document.querySelectorAll(".alert-text");
const dynamicTextColor = document.querySelectorAll(".dynamic-text-color");
const cssRootElement = document.querySelector(":root");
const darkTextColor =
  getComputedStyle(cssRootElement).getPropertyValue("--dark-text-color");
const lightTextColor =
  getComputedStyle(cssRootElement).getPropertyValue("--light-text-color");
const rootCtaColor = getComputedStyle(cssRootElement).getPropertyValue("--cta-background-color");
const primaryBackgroundColor = getComputedStyle(cssRootElement).getPropertyValue("--primary-background-color");



const bodyEle = document.getElementById("classList-inheritance-body");
const btnIconElementList = document.querySelectorAll(".btn-icon");


const linkColor = document.querySelector(".link");
const lorem = window.getComputedStyle(linkColor).getPropertyValue("background-color")

//inheritDynamicColorFromParent(bodyEle.children);  HERE

//console.log(bodyId.children[0].classList);

function inheritDynamicColorFromParent(elementChildren) {

  for (let element of elementChildren) {
    element.classList.add("dynamic-text-color");
    //console.log(element)
  }
  
  //element.children.forEach(item=>item.classList.add("dynamic-text-color"));
}

//console.log(alertTextList.map(item=>window.getComputedStyle(item).getPropertyPriority("color")))

if (alertTextList) {
  alertTextList.forEach((item) => {
  
    const eleBackgroundColor = getBackgroundColor(item);
    const rgbColors = getExtractedRgb(eleBackgroundColor);
    //    console.log(rgbColors)
    let numRed = Number(rgbColors[0]);
    let numGreen = Number(rgbColors[1]);
    let numBlue = Number(rgbColors[2]);
    const [bgHue, bgSat, bgLight] = rgbToHsl(numRed, numGreen, numBlue);

    item.style.color = `hsl(${bgHue}, ${
      bgSat > 50 ? bgSat - 40 : bgSat + 40
    }% , ${bgLight > 50 ? bgLight - 40 : bgLight + 40}%)`;
    

    /*
        let colorBrightness=computeColorBrightness(numRed,numGreen,numBlue);
     console.log(colorBrightness)
     let textColorDynamic = getDynamicTextColor(numRed,numGreen,numBlue, colorBrightness);

         item.style.color=`rgb(${textColorDynamic[0]},${textColorDynamic[1]},${textColorDynamic[2]})`
         */
  });
}

if (dynamicTextColor) {
  dynamicTextColor.forEach((item) => {
    const eleBackgroundColor = getBackgroundColor(item);
    
    const [red, green, blue] = getExtractedRgb(eleBackgroundColor);
    
    const backgroundColorBrightness = computeColorBrightness(
      Number(red),
      Number(green),
      Number(blue)
    );
    
    if (backgroundColorBrightness <= 0.5) {
      item.style.color = lightTextColor;
    } else {
      item.style.color = darkTextColor;
    }
  });
}

   /*
if (btnIconElementList) {
  btnIconElementList.forEach((element) => {
    const parentClassList = element.parentNode.classList;
    const parentBackgroundColorRgb = getExtractedRgb(
      getBackgroundColor(element.parentNode)
    );

    if (parentClassList.contains("btn-outlined")) {
      element.style.color = rootCtaColor;
    } else if (parentClassList.contains("btn-cta")) {
      element.style.color = lightTextColor;
    }

 
     else {
      let numRed = Number(parentBackgroundColorRgb[0]);
      let numGreen = Number(parentBackgroundColorRgb[1]);
      let numBlue = Number(parentBackgroundColorRgb[2]);
      const [bgHue, bgSat, bgLight] = rgbToHsl(numRed, numGreen, numBlue);
      element.style.color = `hsl(${bgHue}, ${
        bgSat > 50 ? bgSat - 40 : bgSat + 40
      }% , ${bgLight > 50 ? bgLight - 40 : bgLight + 40}%)`;
    }
    
  });
}

 */





function getExtractedRgb(eleBackgroundColor) {
  let [r,g,b]= eleBackgroundColor.match(/\d+/g).slice(0, 3); //Regex
  
  if(Number(r)===0&&Number(g)===0&&Number(b)===0){
  
    
    if(primaryBackgroundColor.includes("#")){
      
      return hexToRgb(primaryBackgroundColor);

    }else{
      return getExtractedRgb(primaryBackgroundColor);
    
    }
  }else{
    return [r,g,b];

  }
  
  

   
}

function getBackgroundColor(element) {
  return window.getComputedStyle(element).getPropertyValue("background-color");
}

function computeColorBrightness(red, green, blue) {
  let brightness = red * 299 + green * 587 + blue * 114;
  return (brightness / 2_55_000).toFixed(2);
}

function getDynamicTextColor(red, green, blue, colorBrightness) {
  if (colorBrightness >= 0.5) {
    return [red - 128, blue - 91, green - 1];
  } else {
    return [red + 128, blue + 91, green + 1];
  }
}

function rgbToHsl(red, green, blue) {
  red /= 255;
  green /= 255;
  blue /= 255;

  let max = Math.max(red, green, blue);
  let min = Math.min(red, green, blue);
  let hue, saturation;
  let light = (max + min) / 2;
  if (max === min) {
    hue = saturation = 0;
  } else {
    let diff = max - min;
    saturation = light > 0.5 ? diff / (2 - max - min) : diff / (max + min);
    switch (max) {
      case red:
        hue = (green - blue) / diff + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / diff + 2;
        break;
      case blue:
        hue = (red - green) / diff + 4;
        break;
    }
    hue /= 6;
  }

  return [hue * 360, saturation * 100, light * 100];
}



function hexToRgb(hexValue){
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);
  

  return result ? [parseInt(result[1], 16),parseInt(result[2], 16),parseInt(result[3], 16)]: null;

}


