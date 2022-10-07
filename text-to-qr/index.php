<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://creatoromod.000webhostapp.com/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js" ></script>
    <script>
        window.onload = function(){
            document.getElementById("container").style.display = "none";
            document.getElementById("content").style.display = "block";
        }
        $(window).load(function(){
            $('#loading').fadeOut();
            $('#loading-img').delay(150).fadeOut('slow');
        }),4000;
    </script>
</head>
<body>
    <div id="container">
        <div id="loading">
            <span id="loading-img">Loading...</span>
        </div>
    </div>
    <div id="content">
<!Your code pls>
<form method = "post">
    <center>
    <input type = "text" name = "user" placeholder = "Name of the person"> <br><br>
    <input type = "text" name = "text" placeholder = "Enter your qr text"><br><br>
    <input type = "submit" name = "sub" value = "Submit"><br><br>
    </center>
</form>
<center>
<?php
include("lib/phpqrcode/qrlib.php");

if(isset($_POST['sub'])){
$path = 'img/';
$file = $path.$_POST['user'].'.png';
$us = $_POST['user'];
$qr = $_POST['text'];
Qrcode::png($qr,$file);
echo "$us Your code 🔽<br>";
echo "<img src = '$file'>";
}
?>
</center>
</div>
</body>
</html>
