<!-- Page Content -->
	<div id="page-content-wrapper">
		<button type="button" class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas">
			<span class="hamb-top"></span>
			<span class="hamb-middle"></span>
			<span class="hamb-bottom"></span>
		</button>
			<div class="container">
				<div class="row">
				<?php
					$start=false;
					// session_start();
					
					if (isset($_POST['student'])) {
						include 'modules/studentdata.php';
					}
					else {
						if (isset($_SESSION['islogin']) && $_SESSION['islogin'] == 1) {
							if (isset($_GET['page'])) {
								$page = $_GET['page'];
								switch ($page) {
									case 'dashboard':
									case 'reports':
									case 'logout':
									case 'help':
									case 'studentinfo':
										include 'modules/'.$page.'.php';
										break;
									default:
										include 'modules/attendance.php';
										break;
								}
							}
							else {
								include 'modules/attendance.php';
							}
						}
						else {
							if (isset($_GET['page'])) {
								$page = $_GET['page'];
								switch ($page) {
									case 'teacherspage':
										include 'modules/teacherspage.php';
										break;
									case 'studentspage':
										include 'modules/studentspage.php';
										break;
									default:
										include 'modules/login.php';
										break;
								}
							}
							else {
								include 'modules/login.php';
							}
						}
					}
					?>
				</div>
			</div>
	</div>
	<!-- /#page-content-wrapper -->