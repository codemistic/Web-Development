const inputFile = document.querySelector('#inputFile');
const container = document.querySelector('.container');
const btn = document.querySelector('#btn');

let arr = [];

function addFiles() {
  arr.unshift(inputFile.value);
  inputFile.value = "";  
}

function displayFiles() {
  arr.join(",  ");
  let json = JSON.stringify(arr);
  localStorage.setItem('record', json);
  
  let str = localStorage.getItem('record');

  // To convert string to an object 
  const parseObj = JSON.parse(str);
 
  for(let i=0; i<parseObj.length; i++) {
    const que = document.createElement('div');
    que.classList.add('que');
    que.setAttribute('id', `${i}`)
       que.innerHTML = `
                       <div class='box'>${parseObj[i]}</div>
                       <button type='button' id=${i} class='btnS'>x</button>
                      `;
    document.querySelector(".container").appendChild(que);
  }
  
  const removeBtns = document.querySelectorAll('.btnS');

  let removeBtnId;
  const pressedfunc = e => {
    removeBtnId = e.target.id;
    removeBtns[removeBtnId].parentElement.remove();
  }

  for(let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', pressedfunc);
  }
}
