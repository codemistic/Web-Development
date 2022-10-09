<?php
/*
This will create the file for that user
TODO:
File System
Login
*/
$usersName = $_POST['reg-username'];
$usersPassword = $_POST['reg-password'];
$path = "user/";
if(file_exists($path.$usersName . '.txt')){
echo "Error! User already exists === <a href = 'login.php'>Login</a>";
}else{
// Main
$path = "user/";
$fp = fopen($path.$usersName . '.txt', "w");

// Write
fwrite($fp, $usersPassword);
fclose($fp);



echo "<script>
    window.location.href = 'login.php'
</script>";
}
?>
