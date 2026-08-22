function includeModule(filePath) {
  let script = document.createElement("script");
  script.src = filePath;
  script.type = "text/javascript";
  script.defer = true;
  document.getElementsByTagName("head").item(0).appendChild(script);
}

includeModule(
  "https://cdn.jsdelivr.net/gh/sen-442b/prefix-ui@master/Components/Input/source/main.js"
);
includeModule(
  "https://cdn.jsdelivr.net/gh/sen-442b/prefix-ui@master/Components/Modal/source/main.js"
);
