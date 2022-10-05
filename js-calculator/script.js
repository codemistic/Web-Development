let add = (a,b)=> a+ b
let subtract = (a,b)=> a - b
let mult = (a,b)=> a * b
let divide = (a,b)=> a / b
let inverse = a=> -1*a
let percent = (a,b)=>(a/100) * b


let currentNum = ""
let operand = add
let calculation=""
let result = ""

let resultText = document.querySelector('#result')
let calculationText = document.querySelector('#calculation')
let funcButtons = document.querySelectorAll('.function')
let numButtons = document.querySelectorAll('.number');
let operandSelected = false
let calculated = false


function evaluate(){
    let exp = calculationText.innerText.split(/[+\-\×\÷\%]/,2)
    let num1 =exp[0]
    let num2 = exp[1]
    switch(calculationText.innerText[num1.length]){
        case '+': operand = add;break
        case '-': operand = subtract;break
        case '×': operand = mult; break
        case '÷': operand = divide; break
        case '%': operand = percent; break 
    }
    result = operand(parseFloat(num1),parseFloat(num2))
    updateResult(result)
    calculated = true
}
const modeAdd = 0;
const modeRem = 1;
function updateCalculation(character, mode){
    if(mode == modeAdd)
        calculationText.innerText += character
    else if(mode == modeRem)
        {   console.log("hel");
            if(calculationText[calculationText.length-1] in ['+','-','×','÷',"%"]){
                operandSelected = false;
            }
            calculationText.innerText =calculationText.innerText.slice(0,-1)
        }
}
function updateResult (result){resultText.innerText = result};

function AC(){
    calculationText.innerHTML = "&ensp;"
    resultText.innerHTML = "&ensp;"
    operandSelected = false
    calculated = false
}

funcButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.id!='ac' && button.id!='equal' && button.id!='backspace'&& !operandSelected){
            if(button.id == 'invert')
                alert("Coming soon")
            else{
            updateCalculation(button.innerText, modeAdd)
            operandSelected = true}
        }
        if(button.id=='equal'){
            if(!calculated)
                evaluate()
        }
        if(button.id == 'ac'){
            AC()
        }
        if(button.id=='backspace' && !calculated){
            updateCalculation("", modeRem)
        }
    })
})

numButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(!calculated)
            updateCalculation(button.getAttribute('data-key'),modeAdd)
    })
})
