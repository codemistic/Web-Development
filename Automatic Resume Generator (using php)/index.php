<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<?php $colorA = "#d8b4fe";?>
<meta name="theme-color" content="<?php echo $colorA;?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Resume Download | आचार्य Technologies</title>
<link rel="stylesheet" href="./style.css">
<link rel="stylesheet" href="./fonts.css">
<script src="https://cdn.tailwindcss.com"></script>
<link rel="icon" type="image/x-icon" href="https://acharya-technologies.github.io/img/logo.jpeg">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<?php
if(isset($_GET['uid']) == false){echo "
<div class='flex flex-col h-screen bg-orange-100 flex flex-col items-center justify-center w-screen' align='cente'>
<form method='get' action='' id='requestResume'>
<input name='uid' id='uid' class='border-orange-400 text-white border-2 focus:bg-orange-400 bg-orange-200 p-2 w-60 text-xl rounded-xl text-center Amita' placeholder='Enter Your UID' type='number' min='1000' max='99999' required>
<br><small class='text-xs ml-4 Laila '>e.g. 3174</small>
<br><br><p align='center'>
<input type='submit' class='bg-orange-200 border-2 border-orange-400 hover:bg-orange-400 p-2 text-black Amita hover:text-white text-xl rounded-xl m-auto' value='Get My Resume' id='submit' align='center'></p></form><br>
<div class='Gotu text-sm'>Haven't generated resume yet ? <a class='text-blue-500 hover:underline Laila' href='./generate.php'> Generate here !</a></div>
<br><div class='text-sm text-red-500 Tangerine'>contact developer for username and password. @<a class='text-blue-400 hover:underline Hind text-xs hover:bold' href='tel:+918208607477'>8208607477</a></div>
<div class='fixed b-12 w-screen text-center bottom-4 dark:text-white text-black text-center font-bold Amita'>&copy Developed by
<span class='Gotu text-orange-500 font-bold text-xl'><a href='http://acharya-technologies.github.io/'>आचार्य <sub class='text-green-700'>Technologies.</sub></span><br></a></div>
</div>
";}
?>

<body class="bg-white text-black flex min-h-screen h-full w-auto m-0 p-0">

<?php
$server = 'localhost';
$user = 'id18897310_k1n9';
$pass = 'th15!s0mk4rkulk4rN1';
$db = 'id18897310_resume';
$con = mysqli_connect($server, $user, $pass, $db);

if(isset($_GET['uid'])){
        $uid = $_GET['uid'];
        $query = "SELECT * FROM generate WHERE uid='$uid'";
        $query_run = mysqli_query($con,$query);
if(mysqli_num_rows($query_run) > 0){
        foreach($query_run as $data)
{?>

<script>document.title = "<?php echo $data['name'];?>'s Resume"</script>
<!--Left Col-->

<div class="pt-8 w-1/2 judtify-center mx-auto bg-purple-300" id="left-col">
<h1 class="text-orange-500 text-xl text-center Laila" id="name"><?php echo $data['name']?></h1><br>

<div align="center">
<img class="h-44 w-32 border-2 p-0.5 bg-white rounded border-black" id="photo" src="<?php echo $data['photo']?>"></div>
<div class="contact" align="center">
<h2 class="text-center Yatra border-b-2 mt-10 w-32 mb-2 text-lg border-purple-500 text-purple-500">
Personal Info</h2>
<h4 align="left"><i class="fa fa-birthday-cake text-cyan-500 "> &mdash;</i><span class="text-sm Gotu" id="dob"><?php echo $data['dob']?></span></h4>

<h2 class="text-center Yatra border-b-2 mt-10 w-20 mb-2 text-lg border-purple-500 text-purple-500">
Contact
</h2>
<div class="text-xs">
<h4 class="text-left"><i class="fa text-sm fa-phone text-green-600 "> &mdash;</i><a href="tel:+91<?php echo $data['mobile']?>" class="Gotu" id="mobile"><?php echo $data['mobile']?></a></h4>
<h4 class="text-left"><i class="fa text-sm fa-linkedin text-blue-600 "> &mdash;</i><a href="<?php echo $data['linkedin']?>" class=" Gotu text-center" id="linkedin"><?php echo $data['name']?></a></h4>
<h4 class="text-left"><i class="fa text-sm fa-envelope text-red-800 "> &mdash;</i><a href="mailto:<?php echo $data['email']?>" class=" w-36 Gotu" id="email"><?php echo $data['email']?></a></h4>
<h4 align="left"><i class="fa text-sm fa-instagram text-pink-600 "> &mdash;</i><a href="https://instagram.com/<?php echo $data['instagram']?>" class="text-xs Gotu" id="mobile"><?php echo $data['instagram']?></a></h4>
</div><br><br>
<span class="text-center Yatra border-b-2 mt-10 w-28 mb-2 text-lg border-purple-500 text-purple-500"><i class="m-0 fa fa-language"></i> Languages</span><br>                                                                  <div class="mt-4 text-sm Gotu" id="dob"><?php echo $data['lang1']?></div>
<div class="text-sm Gotu" id="dob"><?php echo $data['lang2']?></div>
<div class="text-sm Gotu" id="dob"><?php echo $data['lang3']?></div>
<button class="text-2xl fa fa-clipboard hover:text-white border-4 hover:border-white h-14 w-14 bg-white text-purple-500
border-purple-500 hover:bg-transparent rounded-full fixed bottom-4 left-4" onclick="copying()">
</button>
</div>






</div>
<!--right column-->
<div class="w-1/2 pt-8 flex flex-col items-center mx-2" id="right-col">
<h2 class="text-xl mb-2  text-purple-500 border-purple-500 text-center Yatra border-b-4 w-44">About</h2>
<h4 class="text-xs Hind text-justify" id="about">
<?php echo $data['about'];?> I want to apply for <span class='Gotu text-blue-800'><?php echo $data['profession'];?></span></h4>
<br>

<h2 class="text-xl mb-2 text-purple-500 border-purple-500 text-center Yatra border-b-4 w-44">Education</h2>
<span class="text-xs Hind text-justify"><span id="education">
<?php echo $data['education']?></span><i> in </i><span id="college"><?php echo $data['college']?></span>
</span>
<br>

<h2 class="text-xl mb-2 text-purple-500 border-purple-500 text-center Yatra border-b-4 w-44">Skills</h2>
<ul class="text-xs Hind text-justify list-disc">
<li id="skill1"><?php echo $data['skill1']?></li>
<li id="skill2"><?php echo $data['skill2']?></li>
<li id="skill3"><?php echo $data['skill3']?></li>
</ul>
<br>

<h2 class="text-xl mb-2 text-purple-500 border-purple-500 text-center Yatra border-b-4 w-44">Projects</h2>
<ul class="text-xs Hind text-justify">
<li id="project1">&bull; <?php echo $data['project1']?></li>
<li id="project2">&bull; <?php echo $data['project2']?></li>
<li id="project3">&bull; <?php echo $data['project3']?></li>
</ul>
<br>

<h2 class="text-xl mb-2 text-purple-500 border-purple-500 text-center Yatra border-b-4 w-44">Achievements</h2>
<ul class="text-xs Hind text-justify">
<li id="achivement1">&bull; <?php echo $data['achievement1']?></li>
<li id="achivement2">&bull; <?php echo $data['achievement2']?></li>
<li id="achivement3">&bull; <?php echo $data['achivement3']?></li>
</ul><br>

<h2 class="text-xl mb-2 text-purple-500 border-purple-500 text-center Yatra border-b-4 w-44">Certifications</h2>
<ul class="text-xs Hind text-justify">
<li id="certificate1">&bull; <?php echo $data['certificate1']?></li>
<li id="certificate2">&bull; <?php echo $data['certificate2']?></li>
<li id="certificate3">&bull; <?php echo $data['certificate3']?></li>
</ul><br>

<h2 class="text-xl mb-2 text-purple-500 border-purple-500 text-center Yatra border-b-4 w-44">Hobbies</h2>
<ul class="text-xs Hind text-justify">
<li id="hobby1">&bull; <?php echo $data['hobby1']?></li>
<li id="hobby2">&bull; <?php echo $data['hobby2']?></li>
<li id="hobby3">&bull; <?php echo $data['hobby3']?></li>
</ul><br>
</div>
<?php }
}
else{echo "<div align='center' class='h-screen bg-red-500 text-white Yatra text-2xl w-full flex items-center justify-center'><b>&#9888; Resume with UID :- <u id='error' class='Amita text-blue-400'></u><br>does not exists.</b></div>";}
}?>

<script>error.innerHTML = '<?php echo $_GET['uid'];?>';
function copying(){                                                       let input = document.createElement('input');                              document.body.appendChild(input);                                         input.value = window.location.href;
input.select();
document.execCommand("copy");
input.remove();                                                           alert("Link Copied Successfully");}
</script>
