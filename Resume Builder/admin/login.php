<!DOCTYPE html>
<?php 
	require_once('dbconnect.php');
	if(isset($_POST['loginSubmit']))
	{
		$uname=$_POST['uname'];
		$upass =$_POST['upass'];

		$query="select * from user where uname='".$uname."'";
		$result=mysqli_query($link,$query) or die("Can not fetch user data.");
		$row=mysqli_fetch_assoc($result);
		
		if(password_verify($upass,$row['upass'])) {
			session_start();
			$_SESSION['uid']=$row['uid'];
			$_SESSION['uname']=$row['uname'];
			header("Location:index.php");
		}
		else {
			echo "Incorrect Username/Password.";
		}
	}
?>

<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Signin</title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">
	</head>
	<body>
		<div class="container signin">
		  <form class="form-signin" method="post">
			<?php
				$query="select image,fname,lname from personal where uid=1";
				$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
				$personaldetails=mysqli_fetch_assoc($result);
				mysqli_free_result($result);
		    ?>
			<img src="../<?php echo $personaldetails['image'] ?>" class="img-thumbnail img-circle"/>
			<h2 class="form-signin-heading"><small>Welcome</small><br/>Mr.<?php echo ucfirst($personaldetails['fname']) ?> <?php echo ucfirst($personaldetails['lname']) ?></h2>
			<label for="inputEmail" class="sr-only">Email address</label>
			<input name="uname" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
			<label for="inputPassword" class="sr-only">Password</label>
			<input name="upass" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
			<button class="btn btn-lg btn-primary btn-block" type="submit" name="loginSubmit">Sign in</button>
		  </form>
		</div>
		<?php
			require_once('dbclose.php');
		?>
	</body>
</html>