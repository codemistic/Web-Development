<?php
$usersName = $_POST['login-username'];
$usersPassword = $_POST['login-password'];
$path = "user/";
if(file_exists($path.$usersName . '.txt')){
    $txtValue = $path.$usersName . '.txt';
    $compare = file_get_contents($txtValue);
    if($usersPassword == $compare){
        echo "<h2>Welcome $usersName!</h2>";
        echo "Go to<br>";
        echo "<a href = 'https://github.com/projectsop/Web-Development/simple-login-register'>Source code</a><br>";
        //Your code starts here
    }else{
        echo "Password incorrect!";
    }
}else{
    echo "Error! User doesn't exist/ password incorrect <a href = 'reg.php'> Click here</a>";
}
?>
