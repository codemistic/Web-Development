const dynamicBorderColorList = document.querySelectorAll(
  ".dynamic-border-color"
);

if (dynamicBorderColorList) {
  dynamicBorderColorList.forEach((ele) => {
    let eleBgColor = window
      .getComputedStyle(ele)
      .getPropertyValue("background-color");
    ele.style.borderColor = eleBgColor;
  });
}
