<?php
	$page="password";
	require("header.php");
	
	if(isset($_POST['updatePass'])){
		$oldPass=$_POST['oldPass'];
		$newPass=$_POST['newPass'];
		$rePass=$_POST['rePass'];
		
		if($newPass!==$rePass)
			echo "New password and Repassword does not match.";
		else {
			$query="select * from user where uid=1";
			$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
			$user=mysqli_fetch_assoc($result);
			if(!password_verify($oldPass,$user['upass']))
				echo "Old password does not match.";
			else {
				$query="update user set upass='".password_hash($newPass,PASSWORD_DEFAULT)."' where uid=1";
				mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
			}
		}
	}
?>
			<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<form class="form-horizontal" method="post">
					<div class="form-group">
					  	<label  class="control-label col-md-4"></label >
						<div class="col-sm-8">
							<img src="../images/user_photo.jpg" class="img-thumbnail"/>
						</div>
					</div>
					<div class="form-group">
					  	<label  class="control-label col-md-4">Current Password</label >
						<div class="col-sm-8">
							<input type="password" class="form-control col-md-8" name="oldPass" required>
						</div>
					</div>
					<div class="form-group">
					  	<label  class="control-label col-md-4">New Password</label >
						<div class="col-sm-8">
							<input type="password" class="form-control col-md-8" name="newPass" required>
						</div>
					</div>
					<div class="form-group">
					  	<label  class="control-label col-md-4">Retype Password</label >
						<div class="col-sm-8">
							<input type="password" class="form-control col-md-8" name="rePass" required>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-4 col-sm-10">
						  <button type="submit" class="btn btn-default btn-success" name="updatePass">Update</button>
						</div>
					</div>
					</form>
				</div>
			</div>
<?php
	require("footer.php");
?>