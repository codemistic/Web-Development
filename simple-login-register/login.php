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
<title>Login</title>
<h1>Simple Login-Registration Form</h1>
<h3>Login: </h3>
<form action="dashboard.php" method="POST">
    <input type="text" placeholder="Username" name="login-username">
    <br>
    <br>
    <input type="text" placeholder="Password" name="login-password">
    <br>
    <br>
    <input type="submit" value="Login">
</form>
<h5>Not registered yet? <a href="reg.php">Register now (FOR FREE)!</a></h5>
</div>
</body>
</html>
