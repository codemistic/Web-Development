const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("len1");
const volEl = document.getElementById("vol1");
const massEl = document.getElementById("mass1");
const convBtn = document.getElementById("conv-btn")

convBtn.addEventListener("click",function(){
    if(inputEl.value!=""){
        convLen();
        convVol();
        convMass();
        inputEl.value='';
        render();
    }
})



    function convLen(){
        let meter = (inputEl.value / 3.281).toFixed(3) ;
        let feet = (inputEl.value * 3.281).toFixed(3); 
        lengthEl.innerHTML=`${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meter} meters`
    }
    
    function convVol(){
        let lit = (inputEl.value * 3.785).toFixed(3) ;
        let gal = (inputEl.value / 3.785).toFixed(3); 
        volEl.innerHTML=`${inputEl.value} liters = ${gal} gallons | ${inputEl.value} gallons = ${lit} liters`
    }
    
    function convMass(){
        let lbs = (inputEl.value * 2.205).toFixed(3) ;
        let kilo = (inputEl.value / 2.205).toFixed(3); 
        massEl.innerHTML=`${inputEl.value} kilos = ${lbs} pounds | ${inputEl.value} pounds = ${kilo} kilos `
    }

  






