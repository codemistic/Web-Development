<?php
include 'setup.php';
$connect = new mysqli($host, $dbuser, $dbpass, $dbname);
if (!$connect) {
    echo '<script>alert("DATABASE NOT CONNECTED")</script>';
}
function generateRandomString($length = 8) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
if (isset($_GET['title'])) {
    $res = $connect->prepare("SELECT * FROM links WHERE title=?");
    $res->bind_param("s", $_GET['title']);
    $res->execute();
    $goto = $res->get_result()->fetch_array();
    $g = $goto[1];
    header ("Location: $g");
}
if (isset($_POST['shrt'])) {
    $title = generateRandomString();
  	if (substr($_POST['textarea'], 0, 4) != "http") {
      $url = "http://".$_POST['textarea'];
    } else {
    $url = $_POST['textarea'];
    }
	$res = $connect->prepare("INSERT INTO links VALUES('',?,?)");
  	$res->bind_param("ss",$url,$title);
  	$res->execute();
    echo "<script>prompt('YOUR SHORTENED URL IS:', '".$siteurl."/".$title."');</script>"; 
}
?>
