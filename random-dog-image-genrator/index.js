const getDogPic = async () => {
    const e = document.getElementById("dog-breed");
    if (e.value !== "") {
      let breedChoice = e.options[e.selectedIndex].value;
      const response = await fetch(
        `https://dog.ceo/api/breed/${breedChoice}/images/random`
      );
      const data = await response.json();
      document.getElementById("dog-pic").src = data.message;
    } else {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      document.getElementById("dog-pic").src = data.message;
    }
  };
  
  getDogPic();
  
  document.querySelector("#new-dog").addEventListener("click", getDogPic);