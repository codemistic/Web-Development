function getbmivalue(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    height=height*12;
    height=height*0.025; //Now height is in meter

    var newbmivalue = weight/Math.pow(height,2);
    newbmivalue=Math.round(newbmivalue);
    document.getElementById('bmivalue').value=newbmivalue;
    // checking for invalid inputs
    if (height=== "" || isNan(height))
        document.getElementById('healthStatus').textContent = "Enter a valid Height";
    else if (weight=== "" || isNan(weight))
        document.getElementById('healthStatus').textContent = "Enter a valid Weight";
    // if both inputs are valid then calculating bmi
    else{
    if(newbmivalue >= 25){
      document.getElementById('healthStatus').textContent = "You are overweight!";
    } else if (newbmivalue <= 19) {
      document.getElementById('healthStatus').textContent = "You are underweight!";
    } else {
      document.getElementById('healthStatus').textContent = "Your body is healthy and active!";
    }
    }
}
