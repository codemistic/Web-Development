const container = document.querySelector('.container');
const btn = document.querySelector('#editBtn');

btn.addEventListener('click', () => {
  const page = document.createElement('div');
  page.classList.add('page');
  page.innerHTML = `
                    <div class='closeBtn'>
                      <button id='close'>X</button>
                    </div>
                    <div class='inputDiv'>
                      <input type='text' id='inputName' placeholder='Enter your name'>
                      <textarea name="" id="inputBio" placeholder='Enter your bio'></textarea>
                    </div>
                    <div class='saveDiv'>
                      <button type='button' id='saveBtn'>Save</button>                     
                    </div>
                    `;

  container.appendChild(page);
  
  const closeBtn = document.querySelector('#close');
  
  closeBtn.onclick = function closeFunc() {
  
    this.parentNode.parentNode.remove();

    // We return 'false' to prevent the default action.
    return false;
  };
  
  // To get the value for Name and Bio 
  const saveBtn = document.querySelector('#saveBtn');
  const name = document.querySelector('#inputName');
  const bio = document.querySelector('#inputBio');
  
  saveBtn.onclick = function saveFunc() {
    document.querySelector('.name').innerHTML = name.value;
    document.querySelector('.bio').innerHTML = bio.value;

    this.parentNode.parentNode.remove();

    // We return 'false' to prevent the default action. 
    return false;
  }

});

