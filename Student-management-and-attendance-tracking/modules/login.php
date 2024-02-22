
<!-- 
<header>

    <h1>Student Attendance Management System</h1>
  
</header> -->

<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3 col-lg-6 text-center">
      
     
      <h3>Teacher's Section</h3>
    </div>
  </div>
  <div class="row">
		<?php if(isset($_GET['invalid'])) : ?>
			<div class="col-md-6 col-md-offset-3 col-lg-6 no-column-padding">
				<div class="form-group alert alert-dismissible alert-danger">
					<button type="button" class="close" data-dismiss="alert">×</button>
					<strong>Sorry!</strong> Invalid Username Or Password.
				</div>
			</div>
		<?php endif; ?>
	
    <div class="col-md-6 col-md-offset-3 col-lg-6">
      <form class="form-horizontal" id="loginForm" action="modules/verify.php" method="post" data-toggle="validator">
				<div class="form-group">
          <label for="inputEmail3" class="control-label">Username</label>
          <input type="text" class="form-control" id="inputEmail3" name="name" maxlength="16" placeholder="Username" required>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="control-label">Password</label>
          <input type="password" class="form-control" id="inputPassword3"  name="pass" maxlength="16" placeholder="Password" required>
        </div>
        <div class="form-group">
          <input type="submit" name="submit" class="btn btn-info btn-block" value="Sign in">
        </div>
      </form>
    </div>
  </div>
  <hr class="col-md-offset-3 col-md-6" />
  <div class="row">
    <div class="col-md-6 col-md-offset-3 col-lg-6 text-center">
      <h3>Student's Section</h3>
    </div>
  </div>
  <div class="row">
		<?php if(isset($_GET['student'])) : ?>
			<div class="col-md-6 col-md-offset-3 col-lg-6 no-column-padding">
				<div class="form-group alert alert-dismissible alert-danger">
					<button type="button" class="close" data-dismiss="alert">×</button>
					<strong>Sorry!</strong> Invalid Student Roll No.
				</div>
			</div>
		<?php endif; ?>
	
    <div class="col-md-6 col-md-offset-3 col-lg-6">
      <form class="form-horizontal" action="index.php" method="post" id="studentForm" data-toggle="validator">
        <div class="form-group">
          <label for="rollno" class="control-label">Roll No.</label>
          <input type="number" class="form-control" id="rollno" maxlength="6" name="rollno" placeholder="Roll No." required>
        </div>
				
				<div class="form-group">
					<input type="submit" name="submit" class="btn btn-success btn-block" value="GO">
				</div>
				
				<input type="hidden" name="student" value="y" />
      </form>
    </div>  
  </div>
</div>

<script>
	$('#loginForm').validator();
	$('#studentForm').validator();
</script>

