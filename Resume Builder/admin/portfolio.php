<?php
	$page="portfolio";
	require("header.php");
?>
			<div class="row">
				<div class="col-md-10 col-md-offset-1 my-container">
				<div class="row">
					<div class="col-md-9">
						<h3>Projects</h3>
					</div>
					<div class="col-md-3">
						<button class="btn btn-success pull-right btnNewProject" data-toggle="modal" data-target="#projectModal">Upload New Project</button>
					</div>
					<table class="table table-striped">
						<thead>
						<tr>
							<th width="150px">Photo</th>
							<th>Title</th>
							<th>Subtitle</th>
							<th>Filter</th>
							<th width="80px"></th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="proj-photo"><img src="../images/portfolio1.jpg" class="img-thumbnail" /></td>
							<td class="proj-title"><h4>Vestibulum varius ligula</h4></td>
							<td class="proj-subtitle"><h5>Vivamus suscipit sem</h5></td>
							<td class="proj-filter"><h5>WEB</h5></td>
							<td>
								<button class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Delete"><span class="glyphicon glyphicon-trash"></span></button>
							</td>
						</tr>
						<tr>
							<td class="proj-photo"><img src="../images/portfolio4.jpg" class="img-thumbnail" /></td>
							<td class="proj-title"><h4>Vestibulum varius ligula</h4></td>
							<td class="proj-subtitle"><h5>Vivamus suscipit sem</h5></td>
							<td class="proj-filter"><h5>Graphic</h5></td>
							<td>
								<button class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Delete"><span class="glyphicon glyphicon-trash"></span></button>
							</td>
						</tr>
						<tr>
							<td class="proj-photo"><img src="../images/portfolio6.jpg" class="img-thumbnail" /></td>
							<td class="proj-title"><h4>Vestibulum varius ligula</h4></td>
							<td class="proj-subtitle"><h5>Vivamus suscipit sem</h5></td>
							<td class="proj-filter"><h5>Photo</h5></td>
							<td>
								<button class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Delete"><span class="glyphicon glyphicon-trash"></span></button>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
				</div>
				
				
				<div class="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-labelledby="projectModalLabel">
				  <div class="modal-dialog" role="document">
					<div class="modal-content">
					  <div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="employmentModalLabel">Upload new project</h4>
					  </div>
					  <form>
					  <div class="modal-body">
						  <div class="form-group">
							<label for="project-title" class="control-label">Title:</label>
							<input type="text" class="form-control" id="project-title">
						  </div>
						  <div class="form-group">
							<label for="project-subtitle" class="control-label">Subtitle:</label>
							<input type="text" class="form-control" id="project-subtitle">
						  </div>
						  <div class="form-group">
							<label for="emp-designation" class="control-label">Image:</label>
							<input type="file" class="form-control" id="project-img">
						  </div>
						  <div class="form-group">
							<label for="emp-description" class="control-label">Project Type:</label>
							<div class="checkbox">
								<label><input type="checkbox" > Web</label>
								<label><input type="checkbox" > Graphic</label>
								<label><input type="checkbox" > Photo</label>
							</div>
						  </div>
					  </div>
					  <div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
						<button type="submit" class="btn btn-primary">Upload</button>
					  </div>
					  </form>
					</div>
				  </div>
				</div>
			</div>
<?php
	require("footer.php");
?>