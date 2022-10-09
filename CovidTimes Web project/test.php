<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js" integrity="sha512-rKFvwjvE4liWPlFnvH4ZhRDfNZ9FOpdkD/BU5gAIA3VS3vOQrQ5BjKgbO3kxebKhHdHcNUHLqxQYSoxee9UwgA==" crossorigin="anonymous"></script>
</head>
<body>
   <h1 id="no" >testing...........</h1> 
   <span id="vaccinated"></span>
   <?php
   $Body = "hey";
   if($Body == true)
   {
    echo"condition true !";
   }
   else{
       echo"Falsed ";
   }
   ?>
</body>
<script>
Papa.parse("https://raw.githubusercontent.com/amey-SN/covid-19-data/master/public/data/vaccinations/country_data/India.csv", {
	download: true,
	complete: function(results) {
        callBack(results.data);
	
	}

});
function callBack(data){
    var len = data.length ;
    len =eval(len - 2 ); 

document.getElementById("vaccinated").innerText = data[len][4];
}

</script>

</html>