const curr1=document.querySelector('#curr-1');
const curr2=document.querySelector('#curr-2');
const amt1=document.querySelector('#curr-1-amt');
const amt2=document.querySelector('#curr-2-amt');
const btn=document.querySelector('#btn');
const details=document.querySelector('#details');

// Functions
function calculate(){
    const curr1Value=curr1.value;
    const curr2Value=curr2.value;

    fetch(`https://v6.exchangerate-api.com/v6/f1d81bf4287e4cc5afe1ed17/latest/${curr1Value}`)
    .then(res => res.json())
    .then(data => {
        const rate= data.conversion_rates[curr2Value];
        details.innerText=`1 ${curr1Value} = ${rate} ${curr2Value}`;
        amt2.value=amt1.value*rate;
        });
}

function swapCurrency(){
    let temp=curr1.value;
    curr1.value=curr2.value;
    curr2.value=temp;
    calculate();
}

// Event Listeners
curr1.addEventListener('change',calculate);
amt1.addEventListener('input',calculate);
curr2.addEventListener('change',calculate);
amt2.addEventListener('input',calculate);
window.addEventListener('load', calculate);
btn.addEventListener('click',swapCurrency);