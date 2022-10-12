<?php
	$page="profile";
	require("header.php");
	
	if(isset($_POST['addemp-submit'])){
		$query="insert into employment(fromyear,toyear,company,designation,description) values('".$_POST['addemp-from']."','".$_POST['addemp-to']."','".$_POST['addemp-company']."','".$_POST['addemp-designation']."','".$_POST['addemp-description']."')";
		mysqli_query($link,$query) or die("Error inserting data.".mysqli_error($link));
	}
	if(isset($_POST['emp-update'])){
		$query="update employment set fromyear='".$_POST['emp-from']."', toyear='".$_POST['emp-to']."', designation='".$_POST['emp-designation']."', description='".$_POST['emp-description']."' where empid='".$_POST['empid']."'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
	}
	if(isset($_POST['addedu-submit'])){
		$query="insert into education(fromyear,toyear,college,course,description) values('".$_POST['addedu-from']."','".$_POST['addedu-to']."','".$_POST['addedu-college']."','".$_POST['addedu-course']."','".$_POST['addedu-description']."')";
		mysqli_query($link,$query) or die("Error inserting data.".mysqli_error($link));
	}
	if(isset($_POST['edu-update'])){
		$query="update education set fromyear='".$_POST['edu-from']."', toyear='".$_POST['edu-to']."', course='".$_POST['edu-course']."', description='".$_POST['edu-description']."' where eduid='".$_POST['eduid']."'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
	}
	if(isset($_POST['progskillupdate'])){
		$query="update skills set skillvalue='".$_POST['Wordpress']."' where skill='Wordpress'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
		$query="update skills set skillvalue='".$_POST['PHP']."' where skill='PHP'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
		$query="update skills set skillvalue='".$_POST['HTML']."' where skill='HTML'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
		$query="update skills set skillvalue='".$_POST['CSS']."' where skill='CSS'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
		$query="update skills set skillvalue='".$_POST['MySQL']."' where skill='MySQL'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
		$query="update skills set skillvalue='".$_POST['JavaScript']."' where skill='JavaScript'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
	}
	if(isset($_POST['graphskillupdate'])){
		$query="update skills set skillvalue='".$_POST['AdobePhotoshop']."' where skill='AdobePhotoshop'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
		$query="update skills set skillvalue='".$_POST['AdobeIllustrator']."' where skill='AdobeIllustrator'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
		$query="update skills set skillvalue='".$_POST['AdobeIndesign']."' where skill='AdobeIndesign'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
		$query="update skills set skillvalue='".$_POST['CorelDraw']."' where skill='CorelDraw'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
		$query="update skills set skillvalue='".$_POST['3DMax']."' where skill='3DMax'";
		mysqli_query($link,$query) or die("Error updating data.".mysqli_error($link));
	}
?>
			<div class="row">
				<div class="col-md-10 col-md-offset-1">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs nav-justified" role="tablist">
						<li role="presentation" class="active"><a href="#employment" aria-controls="employment" role="tab" data-toggle="tab">Employment</a></li>
						<li role="presentation"><a href="#education" aria-controls="education" role="tab" data-toggle="tab">Education</a></li>
						<li role="presentation"><a href="#skills" aria-controls="skills" role="tab" data-toggle="tab">Skills</a></li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane fade in active" id="employment">
							<button class="btn btn-success pull-right" data-toggle="modal" data-target="#employmentModal">Add new employment</button>
							<table class="table">
								<thead>
								<tr>
									<th>From</th>
									<th>To</th>
									<th>Company</th>
									<th>Designamtion</th>
									<th>Description</th>
									<th width="150px"></th>
								</tr>
								</thead>
								<tbody>
								<?php
									$query="select * from employment";
									$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));									
									while($empdetails=mysqli_fetch_assoc($result))
									{
								?>
								<tr>
									<td class="from"><?php echo $empdetails['fromyear']; ?></td>
									<td class="to"><?php echo $empdetails['toyear']; ?></td>
									<td class="company"><?php echo $empdetails['company']; ?></td>
									<td class="designation"><?php echo $empdetails['designation']; ?></td>
									<td class="description"><?php echo $empdetails['description']; ?></td>
									<td>
										<button class="btn btn-success" data-toggle="modal" data-target="#employmentEditModal" empid="<?php echo $empdetails['empid']; ?>">Edit</button>
										<button class="btn btn-danger" title="Delete"><span class="glyphicon glyphicon-trash"></span></button>
									</td>
								</tr>								
								<?php
									}
									mysqli_free_result($result);
								?>
								<!--<tr>
									<td class="from">2009</td>
									<td class="to">2012</td>
									<td class="company">SED DO EIUSMOD</td>
									<td class="designation">SENIOR DESIGNER</td>
									<td class="description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
									<td>
										<button class="btn btn-success" data-toggle="modal" data-target="#employmentEditModal">Edit</button>
										<button class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Delete"><span class="glyphicon glyphicon-trash"></span></button>
									</td>
								</tr>
								<tr>
									<td class="from">2012</td>
									<td class="to">Present</td>
									<td class="company">COMMODO CONSEQUAT</td>
									<td class="designation">ART DIRECTOR</td>
									<td class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</td>
									<td>
										<button class="btn btn-success" data-toggle="modal" data-target="#employmentEditModal">Edit</button>
										<button class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Delete"><span class="glyphicon glyphicon-trash"></span></button>
									</td>
								</tr>-->
								</tbody>
							</table>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="education">
							<button class="btn btn-success pull-right" data-toggle="modal" data-target="#educationModal">Add new education</button>
							<table class="table">
								<thead>
								<tr>
									<th>From</th>
									<th>To</th>
									<th>College</th>
									<th>Course</th>
									<th>Description</th>
									<th width="150px"></th>
								</tr>
								</thead>
								<tbody>
								<?php
									$query="select * from education";
									$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));									
									while($edudetails=mysqli_fetch_assoc($result))
									{
								?>
								<tr>
									<td class="from"><?php echo $edudetails['fromyear']; ?></td>
									<td class="to"><?php echo $edudetails['toyear']; ?></td>
									<td class="college"><?php echo $edudetails['college']; ?></td>
									<td class="course"><?php echo $edudetails['course']; ?></td>
									<td class="description"><?php echo $edudetails['description']; ?></td>
									<td>
										<button class="btn btn-success" data-toggle="modal" data-target="#educationEditModal" eduid="<?php echo $edudetails['eduid']; ?>">Edit</button>
										<button class="btn btn-danger" title="Delete"><span class="glyphicon glyphicon-trash"></span></button>
									</td>
								</tr>								
								<?php
									}
									mysqli_free_result($result);
								?>
								<!--
								<tr>
									<td class="from">2012</td>
									<td class="to">Present</td>
									<td class="college">COMMODO CONSEQUAT</td>
									<td class="course">ART DIRECTOR</td>
									<td class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</td>
									<td>
										<button class="btn btn-success" data-toggle="modal" data-target="#educationEditModal">Edit</button>
										<button class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Delete"><span class="glyphicon glyphicon-trash"></span></button>
									</td>
								</tr>-->
								</tbody>
							</table>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="skills">
							<div class="col-md-6">
								<form method="post">
								<div class="row">
									<div class="col-md-12"><h3>Programming Skills</h3></div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<?php
											$query="select * from skills where skilltype='progskill'";
											$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));									
											while($progskilldetails=mysqli_fetch_assoc($result))
											{
										?>
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon"><?php echo $progskilldetails['skill'] ?></span>
											<input type="text" class="form-control right" name="<?php echo $progskilldetails['skill'] ?>" value="<?php echo $progskilldetails['skillvalue'] ?>">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
										<?php
											}
										?>
										<!--
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">PHP</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">HTML</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
									
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">CSS</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">MySQL</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">JavaScript</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>-->
									</div>
								</div>
								<div class="row">
									<div class="col-md-12"><button class="btn btn-success" name="progskillupdate">Update</button></div>
								</div>
								</form>
							</div>
							<div class="col-md-6">
								<form method="post">
								<div class="row">
									<div class="col-md-12"><h3>Graphic Skills</h3></div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<?php
											$query="select * from skills where skilltype='graphskill'";
											$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));									
											while($graphkilldetails=mysqli_fetch_assoc($result))
											{
										?>
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon"><?php echo $graphkilldetails['skill'] ?></span>
											<input type="text" class="form-control right" name="<?php echo $graphkilldetails['skill'] ?>" value="<?php echo $graphkilldetails['skillvalue'] ?>">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
										<?php
											}
										?>
										<!--<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">Adobe Photoshop</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">Adobe Illustrator</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">Adobe Indesign</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">Corel Draw</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>
										<div class="form-group">
										  <div class="input-group">
											<span class="input-group-addon">3D Max</span>
											<input type="text" class="form-control right" id="lName">
											<span class="input-group-addon right">%</span>
										  </div>
										</div>-->
									</div>
								</div>
								<div class="row">
									<div class="col-md-12"><button class="btn btn-success pull-right" name="graphskillupdate">Update</button></div>
								</div>
								</form>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="modal fade" id="employmentModal" tabindex="-1" role="dialog" aria-labelledby="employmentModalLabel">
		  <div class="modal-dialog" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="employmentModalLabel">Add Employment</h4>
			  </div>
			  <form method="post">
			  <div class="modal-body">
				  <div class="form-group">
					<label for="addemp-from" class="control-label">From:</label>
					<input type="text" class="form-control" id="addemp-from" name="addemp-from">
				  </div>
				  <div class="form-group">
					<label for="addemp-to" class="control-label">To:</label>
					<input type="text" class="form-control" id="addemp-to" name="addemp-to">
				  </div>
				  <div class="form-group">
					<label for="addemp-company" class="control-label">Company:</label>
					<input type="text" class="form-control" id="addemp-company" name="addemp-company">
				  </div>
				  <div class="form-group">
					<label for="addemp-designation" class="control-label">Designation:</label>
					<input type="text" class="form-control" id="addemp-designation" name="addemp-designation">
				  </div>
				  <div class="form-group">
					<label for="addemp-description" class="control-label">Description:</label>
					<textarea class="form-control" id="addemp-description" name="addemp-description"></textarea>
				  </div>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="submit" class="btn btn-primary" name="addemp-submit">Add</button>
			  </div>
			  </form>
			</div>
		  </div>
		</div>
		
		<div class="modal fade" id="employmentEditModal" tabindex="-1" role="dialog" aria-labelledby="employmentEditModalLabel">
		  <div class="modal-dialog" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="employmentEditModalLabel">Edit Employment</h4>
			  </div>
			  <form method="post">
			  <input type="hidden" id="empid" name="empid" value="">
			  <div class="modal-body">
				  <div class="form-group">
					<label for="emp-from" class="control-label">From:</label>
					<input type="text" class="form-control" id="emp-from" name="emp-from">
				  </div>
				  <div class="form-group">
					<label for="emp-to" class="control-label">To:</label>
					<input type="text" class="form-control" id="emp-to" name="emp-to">
				  </div>
				  <div class="form-group">
					<label for="emp-designation" class="control-label">Designation:</label>
					<input type="text" class="form-control" id="emp-designation" name="emp-designation">
				  </div>
				  <div class="form-group">
					<label for="emp-description" class="control-label">Description:</label>
					<textarea class="form-control" id="emp-description" name="emp-description"></textarea>
				  </div>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="submit" class="btn btn-primary" name="emp-update">Update</button>
			  </div>
			  </form>
			</div>
		  </div>
		</div>
		
		<div class="modal fade" id="educationModal" tabindex="-1" role="dialog" aria-labelledby="educationModalLabel">
		  <div class="modal-dialog" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="educationModalLabel">Add Education</h4>
			  </div>
			  <form method="post">
			  <div class="modal-body">
				  <div class="form-group">
					<label for="addedu-from" class="control-label">From:</label>
					<input type="text" class="form-control" id="addedu-from" name="addedu-from">
				  </div>
				  <div class="form-group">
					<label for="addedu-to" class="control-label">To:</label>
					<input type="text" class="form-control" id="addedu-to" name="addedu-to">
				  </div>
				  <div class="form-group">
					<label for="addedu-college" class="control-label">College:</label>
					<input type="text" class="form-control" id="addedu-college" name="addedu-college">
				  </div>
				  <div class="form-group">
					<label for="addedu-course" class="control-label">Course:</label>
					<input type="text" class="form-control" id="addedu-course" name="addedu-course">
				  </div>
				  <div class="form-group">
					<label for="addedu-description" class="control-label">Description:</label>
					<textarea class="form-control" id="addedu-description" name="addedu-description"></textarea>
				  </div>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="submit" class="btn btn-primary" name="addedu-submit">Add</button>
			  </div>
			  </form>
			</div>
		  </div>
		</div>
		
		<div class="modal fade" id="educationEditModal" tabindex="-1" role="dialog" aria-labelledby="educationEditModalLabel">
		  <div class="modal-dialog" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="educationModalLabel">Edit Education</h4>
			  </div>
			  <form method="post">
			  <input type="hidden" id="eduid" name="eduid" value="">
			  <div class="modal-body">
				  <div class="form-group">
					<label for="edu-from" class="control-label">From:</label>
					<input type="text" class="form-control" id="edu-from" name="edu-from">
				  </div>
				  <div class="form-group">
					<label for="edu-to" class="control-label">To:</label>
					<input type="text" class="form-control" id="edu-to" name="edu-to">
				  </div>
				  <div class="form-group">
					<label for="edu-course" class="control-label">Course:</label>
					<input type="text" class="form-control" id="edu-course" name="edu-course">
				  </div>
				  <div class="form-group">
					<label for="edu-description" class="control-label">Description:</label>
					<textarea class="form-control" id="edu-description" name="edu-description"></textarea>
				  </div>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="submit" class="btn btn-primary" name="edu-update">Update</button>
			  </div>
			  </form>
			</div>
		  </div>
		</div>
		</div>
<?php
	require("footer.php");
?>	