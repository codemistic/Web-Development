function changeToRegister() {
    const changeToRegisterBtn = document.querySelector('#changeToRegister');
    const changeToLogin = document.querySelector('#changeToLogin');
    const loginForm = document.querySelector('#login');
    const registerForm = document.querySelector('#register');
    changeToRegisterBtn.addEventListener('click', () => {
        loginForm.classList.remove('active')
        registerForm.classList.add('active')
    })
}
changeToRegister();


function changeToLogin() {
    const changeToLoginBtn = document.querySelector('#chnageToLogin');
    const loginForm = document.querySelector('#login');
    const registerForm = document.querySelector('#register');
    changeToLoginBtn.addEventListener('click', () => {
        loginForm.classList.add('active')
        registerForm.classList.remove('active')
    })
}
changeToLogin();


function activeInput(event) {
    if (screen.width > 600) {
        let input = event;
        input.style.border = '1px solid #4054D2';
    }
}
activeInput()