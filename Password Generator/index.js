var password = document.getElementById('password')
// var passLength = document.getElementById('passLength')

// console.log(passLength.value)

function generatePassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var passwordLength = 12;


    passwordLength = passLength.value

    var password = ""

    for(var i=0; i<=passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length)
        // password += chars.substring(randomNumber, randomNumber + 1)
        password += chars.charAt(randomNumber)
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    var copyText = document.getElementById('password')
    copyText.select()
    document.execCommand('copy')
}