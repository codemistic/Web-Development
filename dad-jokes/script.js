

const dadjoke = async () =>{
  try{
  const head = {headers:{Accept:'application/json'}};
  const response = await axios.get('https://icanhazdadjoke.com/',head);
  return response.data.joke;
  } catch(e){
    alert("ERROR, no joke/or wrong api/ "+e);
    return ('NO jokes available..')
  }
}

const displayBox = document.querySelector('#box');
const btn = document.querySelector('button');

btn.addEventListener('click',async ()=>{
  const joke = await dadjoke();
  displayBox.innerHTML = `<h3> ${joke} </h3>`;
})