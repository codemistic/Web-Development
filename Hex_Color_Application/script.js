document.querySelector("#submit").addEventListener("click", () => {
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    var hexcode1 = "";
    var hexcode2 = "";
    var random_index = 0;
    
    for(let i = 0; i < 6;i++){
      random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode1 += hex_numbers[random_index];
      random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode2 += hex_numbers[random_index];
    }
  
    document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
    document.querySelector("#hexcode1").textContent = hexcode1;
    document.querySelector("#hexcode2").textContent = hexcode2;
  });
  