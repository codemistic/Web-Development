<?php
	session_start();
?>

<?php if (isset($_SESSION['islogin']) && $_SESSION['islogin'] == 1) : ?>
	<nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
			<ul class="nav sidebar-nav">
					<li class="sidebar-brand">

							<a href="index.php">
						
							</a>
					</li>
					<li>
							<a href="index.php?page=dashboard">Dashboard</a>
					</li>
					<li>
							<a href="index.php">Take Attendance</a>
					</li>
					<li>
							<a href="index.php?page=studentinfo">List of Students</a>
					</li>
					<li>
							<a href="index.php?page=reports">Reports</a>
					</li>
					<li>
							<a href="index.php?page=logout">Logout</a>
					</li>
			</ul>
	</nav>
<?php else: ?>
	<nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
			<ul class="nav sidebar-nav">
					<li class="sidebar-brand">
							<a href="index.php">
								
							</a>
					</li>
					<li>
							<a href="index.php">Login</a>
					</li>
					<li>
							<a href="index.php">Teacher's Section</a>
					</li>
					<li>
							<a href="index.php">Student's Section</a>
					</li>
			</ul>
	</nav>
<?php endif; ?>
