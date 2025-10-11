<!DOCTYPE html>
<?php
	session_start();
	if(!isset($_SESSION['uid']))
		header('Location:login.php');
	if(isset($_POST['logoutsubmit'])) {
		session_destroy();
		header('Location:login.php');
	}
	require_once("dbconnect.php");
?>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Resume</title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="https://cdn.quilljs.com/1.2.2/quill.snow.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
	</head>
	<body>
		<nav class="navbar navbar-inverse navbar-fixed-top">
		  <div class="container-fluid">
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <a class="navbar-brand" href="index.php">Admin</a>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			  <ul class="nav navbar-nav">
				<li <?php if($page=="index") echo 'class="active"' ?>><a href="index.php">Information</a></li>
				<li <?php if($page=="profile") echo 'class="active"' ?>><a href="profile.php">Profile</a></li>
				<li <?php if($page=="portfolio") echo 'class="active"' ?>><a href="portfolio.php">Portfolio</a></li>
			  </ul>
			  <form method="post">
				  <ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<?php
							$query="select * from personal where uid=1";
							$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
							$personaldetails=mysqli_fetch_assoc($result);
							mysqli_free_result($result);
						?>
					  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Welcome <?php echo ucfirst($personaldetails['fname']); ?> <span class="caret"></span></a>
					  <ul class="dropdown-menu">
						<li><a href="change-password.php">Change Password</a></li>
						<li role="separator" class="divider"></li>
						<li><form method="post"><input type="submit" class="btn btn-default pull-right" name="logoutsubmit" value="Logout"></a><form></li>
					  </ul>
					</li>
				  </ul>
			  </form>
			</div>
		  </div>
		</nav>
		<div class="container">
			
