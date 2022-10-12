<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
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
    <div id="container">
        <div id="loading">
            <span id="loading-img">Loading...</span>
        </div>
    </div>
    <div id="content">
<!Your code pls>
<?php
if(isset($_POST['sub'])){
    $website = $_POST["url"];
if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
  $websiteErr = "Invalid URL: $website";
  echo "<center><h1>$websiteErr</h1></center>";
}else{
function password_generate($chars) 
{
  $data = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz';
  return substr(str_shuffle($data), 0, $chars);
}

$url = password_generate(7);
$path = "url/";
$post = $_POST['url'];
$content = "<?php header('Location: $post'); ?>";
$fp = fopen($path.$url . '.php', "w");
fwrite($fp, $content);
fclose($fp);
echo "<h1>Success to short your url!<br>Url:<br>https://creatoromod.000webhostapp.com/shorturl/url/$url.php</h1>";
   
}}
?>
</div>
