<!DOCTYPE html>
<?php
	require_once('admin/dbconnect.php');
?>
<html>
	<head>
		<title>Resume</title>
		<link rel="stylesheet" href="css/style.css" />
	</head>
	<body>
		<div class="container">
			<div class="container-inner">
			<nav id="header">
				<?php
					$query="select * from personal where uid=1";
					$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
					$personaldetails=mysqli_fetch_assoc($result);
					mysqli_free_result($result);
					
					$query="select * from pages where page='home'";
					$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
					$homecontent=mysqli_fetch_assoc($result);
					mysqli_free_result($result);
					
					$query="select * from social where uid=1";
					$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
					$socialdetails=mysqli_fetch_assoc($result);
					mysqli_free_result($result);
				?>
				<ul class="nav">
					<li class="splash">
						<a href="#information">
							<div class="profile-image">
								<img src="<?php echo $personaldetails['image']; ?>" />
							</div>
							<div class="profile-info">
								<div class="profile-name"><?php echo strtoupper($personaldetails['fname']); ?><br/><?php echo strtoupper($personaldetails['lname']); ?></div>
								<div class="profile-designation"><?php echo strtoupper($personaldetails['designation']); ?></div>
							</div>
						</a>
					</li>
					<li class="profile"><a href="#profile"><span class="icon">a</span></a></li>
					<li class="portfolio"><a href="#portfolio"><span class="icon">b</span></a></li>
					<li class="contact"><a href="#contact"><span class="icon">c</span></a></li>
				</ul>
				<div class="clear"></div>
			</nav>
			<section id="information">
				<div class="info">
					<div class="info-text"><?php echo $homecontent['data']; ?></div>
					<div class="phone-icon"><span class="icon2">d</span></div>
					<div class="call"><?php echo $personaldetails['phone']; ?></div>
					<div class="reach-me"><?php echo $personaldetails['email']; ?><br/><?php echo $personaldetails['website']; ?></div>
				</div>
				<div class="social">
					<ul class="nav">
						<li class="social-icon"><a class="social-1" href="<?php echo $socialdetails['facebook']; ?>"><span class="icon">0</span></a></li>
						<li class="social-icon"><a class="social-2" href="<?php echo $socialdetails['twitter']; ?>"><span class="icon">1</span></a></li>
						<li class="social-icon"><a class="social-3" href="<?php echo $socialdetails['googleplus']; ?>"><span class="icon">2</span></a></li>
						<li class="social-icon"><a class="social-4" href="<?php echo $socialdetails['instagram']; ?>"><span class="icon">3</span></a></li>
					</ul>
				</div>
				<div class="clear"></div>
			</section>
			<section id="profile">
				<article id="employment">
					<div class="emploment-header collapse">
						<div class="icon-emp"><span class="icon">e</span></div>
						<h2>Employment</h2>
						<span class="collapse-control"></span>
						<div class="clear"></div>
					</div>
					<div class="emploment-details">
						<?php
							$query="select * from employment";
							$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
							
							$oddeven="odd";
							while($empdetails=mysqli_fetch_assoc($result))
							{
						?>
						<div class="emploment-detail <?php echo $oddeven; ?>">
							<div class="duration">
								<div class="from"><?php echo $empdetails['fromyear']; ?></div>
								<div class="to"><?php echo $empdetails['toyear']; ?></div>
							</div>
							<div class="company-pos">
								<h4 class="company"><span class="icon3"></span><?php echo $empdetails['company']; ?></h4>
								<h4 class="position"><span class="icon3"></span><?php echo $empdetails['designation']; ?></h4>
								<div class="clear"></div>
								<div class="desc"><p><?php echo $empdetails['description']; ?></p></div>
							</div>
							<div class="clear"></div>
						</div>
						<?php
								$oddeven==="odd" ? $oddeven="even" : $oddeven="odd";
							}
							mysqli_free_result($result);
						?>
						<!--<div class="emploment-detail odd">
							<div class="duration">
								<div class="from">2005</div>
								<div class="to">2007</div>
							</div>
							<div class="company-pos">
								<h4 class="company"><span class="icon3"></span>COMMODO CONSEQUAT</h4>
								<h4 class="position"><span class="icon3"></span>WEB DESIGNER</h4>
								<div class="clear"></div>
								<div class="desc">
									<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="emploment-detail even">
							<div class="duration">
								<div class="from">2009</div>
								<div class="to">2012</div>
							</div>
							<div class="company-pos">
								<h4 class="company"><span class="icon3"></span>SED DO EIUSMOD</h4>
								<h4 class="position"><span class="icon3"></span>SENIOR DESIGNER</h4>
								<div class="clear"></div>
								<div class="desc">
									<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="emploment-detail odd">
							<div class="duration">
								<div class="from">2012</div>
								<div class="to">PRESENT</div>
							</div>
							<div class="company-pos">
								<h4 class="company"><span class="icon3"></span>COMMODO CONSEQUAT</h4>
								<h4 class="position"><span class="icon3"></span>ART DIRECTOR</h4>
								<div class="clear"></div>
								<div class="desc">
									<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
								</div>
							</div>
							<div class="clear"></div>
						</div>-->
					</div>
				</article>
				<article id="education">
					<div class="education-header collapse">
						<div class="icon-edu"><span class="icon">h</span></div>
						<h2>Education</h2>
						<span class="collapse-control"></span>
						<div class="clear"></div>
					</div>
					<div class="education-details">
						<?php
							$query="select * from education";
							$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
							
							$oddeven="odd";
							while($edudetails=mysqli_fetch_assoc($result))
							{
						?>
						<div class="education-detail <?php echo $oddeven; ?>">
							<div class="duration">
								<div class="from"><?php echo $edudetails['fromyear']; ?></div>
								<div class="to"><?php echo $edudetails['toyear']; ?></div>
							</div>
							<div class="company-pos">
								<h4 class="company"><span class="icon3"></span><?php echo $edudetails['college']; ?></h4>
								<h4 class="position"><span class="icon3"></span><?php echo $edudetails['course']; ?></h4>
								<div class="clear"></div>
								<div class="desc"><p><?php echo $edudetails['description']; ?></p></div>
							</div>
							<div class="clear"></div>
						</div>
						<?php
								$oddeven==="odd" ? $oddeven="even" : $oddeven="odd";
							}
							mysqli_free_result($result);
						?>
						<!--<div class="education-detail odd">
							<div class="duration">
								<div class="from">2002</div>
								<div class="to">2005</div>
							</div>
							<div class="company-pos">
								<h4 class="company"><span class="icon3"></span>CONSECTETUR ADIPISICING ELIT</h4>
								<h4 class="position"><span class="icon3"></span>WEB DESIGN</h4>
								<div class="clear"></div>
								<div class="desc">
									<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="education-detail even">
							<div class="duration">
								<div class="from">2007</div>
								<div class="to">2009</div>
							</div>
							<div class="company-pos">
								<h4 class="company"><span class="icon3"></span>SED DO EIUSMOD</h4>
								<h4 class="position"><span class="icon3"></span>GRAPHIC DESIGN</h4>
								<div class="clear"></div>
								<div class="desc">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="clear"></div>
						</div>-->
					</div>
				</article>
				<article id="skills">
					<div class="skills-header collapse">
						<div class="icon-skills"><span class="icon">i</span></div>
						<h2>SKILLS</h2>
						<span class="collapse-control"></span>
						<div class="clear"></div>
					</div>
					<div class="skills-details odd">
						<aside class="left-aside">
							<h4>PROGRAMMING SKILLS</h4>
							<?php
								$query="select * from skills where skilltype='progskill'";
								$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
								$progskill=1;
								while($progskilldetails=mysqli_fetch_assoc($result))
								{
							?>
							<div class="skill <?php echo "progskill".$progskill ?>" style="width:<?php echo $progskilldetails['skillvalue'].'%;' ?>"><strong><?php echo $progskilldetails['skill'] ?></strong> / <?php echo $progskilldetails['skillvalue'] ?>% </div>
							<?php
									$progskill++;
								}
								mysqli_free_result($result);
							?>
							<!--<div class="skill php"><strong>PHP</strong> / 80%</div>
							<div class="skill html"><strong>HTML</strong> / 99%</div>
							<div class="skill css"><strong>CSS</strong> / 90%</div>
							<div class="skill mysql"><strong>MySQL</strong> / 70%</div>
							<div class="skill javascript"><strong>JavaScript</strong> / 60%</div>-->
						</aside>
						<aside class="right-aside">
							<h4>GRAPHIC SKILLS</h4>
							<?php
								$query="select * from skills where skilltype='graphskill'";
								$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
								$graphskill=1;
								while($graphskilldetails=mysqli_fetch_assoc($result))
								{
							?>
							<div class="skill <?php echo "graphskill".$graphskill ?>" style="width:<?php echo $graphskilldetails['skillvalue'].'%;' ?>"><strong><?php echo $graphskilldetails['skill'] ?></strong> / <?php echo $graphskilldetails['skillvalue'] ?>% </div>
							<?php
									$graphskill++;
								}
								mysqli_free_result($result);
							?>
							<!--<div class="skill adbphoto"><strong>Adobe Photoshop</strong> / 99% </div>
							<div class="skill adbillu"><strong>Adobe Illustrator</strong> / 80%</div>
							<div class="skill adbind"><strong>Adobe Indesign</strong> / 70%</div>
							<div class="skill crldraw"><strong>Corel Draw</strong> / 60%</div>
							<div class="skill max3d"><strong>3D Max</strong> / 50%</div>-->
						</aside>
						<div class="clear"></div>
					</div>
				</article>
				<article class="profile-buttons">
					<button class="download">DOWNLOAD</button>
					<button class="print">PRINT</button>
				</article>
			</section>
			<section id="portfolio">
				<div class="portfolio-header">
					<ul id="portfolio-filters">
						<li><a href="*" class="current">All</a></li>
						<li><a href=".web">Web</a></li>
						<li><a href=".graphic">Graphic</a></li>
						<li><a href=".photo">Photo</a></li>
					</ul>
				</div>
				<div class="portfolio-details">
					<?php
						$query="select * from projects";
						$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
						
						while($projectdetails=mysqli_fetch_assoc($result))
						{
					?>
					<article class="portfolio-post <?php echo $projectdetails['filter']; ?>">
						<a href="#">
							<img class="post-image" src="<?php echo $projectdetails['photo']; ?>" />
							<span class="overlay">
								<h4><?php echo $projectdetails['title']; ?></h4>
								<h5><?php echo $projectdetails['subtitle']; ?></h5>
								<img src="images/magnify.png" />
							</span>
						</a>
					</article>					
					<?php
						}
						mysqli_free_result($result);
					?>
					<!--				
					<article class="portfolio-post graphic">
						<a href="#">
							<img class="post-image" src="images/portfolio4.jpg" />
							<span class="overlay">
								<h4>Vestibulum varius ligula</h4>
								<h5>Vivamus suscipit sem</h5>
								<img src="images/magnify.png" />
							</span>
						</a>
					</article>
					<article class="portfolio-post web">
						<a href="#">
							<img class="post-image" src="images/portfolio6.jpg" />
							<span class="overlay">
								<h4>Vestibulum varius ligula</h4>
								<h5>Vivamus suscipit sem</h5>
								<img src="images/magnify.png" />
							</span>
						</a>
					</article>
					<article class="portfolio-post photo">
						<a href="#">
							<img class="post-image" src="images/portfolio10.jpg" />
							<span class="overlay">
								<h4>Vestibulum varius ligula</h4>
								<h5>Vivamus suscipit sem</h5>
								<img src="images/magnify.png" />
							</span>
						</a>
					</article>-->
					<div class="clear"></div>
				</div>
				<div class="profile-buttons">
					<button class="print">MORE RESULTS</button>
				</div>
			</section>
			<section id="contact">
				<div class="map"></div>
				<div class="contact-wrapper">
					<?php
						$query="select * from personal where uid=1";
						$result=mysqli_query($link,$query) or die("Error fetching data.".mysqli_error($link));
						$personaldetails=mysqli_fetch_assoc($result);
						mysqli_free_result($result);					
					?>
					<aside class="left-aside">
						<div class="phone-icon"><span class="icon2">d</span></div>
						<div class="call"><?php echo $personaldetails['phone']; ?></div>
						<div class="reach-me"><?php echo $personaldetails['email']; ?><br/><?php echo $personaldetails['website']; ?><br/><br/>Vcard<br/><br/><img src="images/qr.png" /></div>
					</aside>
					<aside class="right-aside">
						<div class="contact_form">
							<h3 class="title">Let's keep in touch</h3>
							<form id="contact_form" mathod="post">
								<div class="field">
									<label class="required">Name</label>
									<input type="text" name="username"/>
								</div>
								<div class="field">
									<label class="required">Email</label>
									<input type="text" name="email"/>
								</div>
								<div class="field">
									<label class="required">Message</label>
									<textarea name="message"></textarea>
								</div>
								<div class="button">
									<input type="submit" class="submit" value="submit"/>
									<div class="req">Remember to fill out all the fields.</div>
								</div>
								<div class="result"></div>
							</form>
						</div>
					</aside>
					<div class="clear"></div>
				</div>
			</section>
			</div>
			<footer id="footer">
				<a href="#" id="toTop"></a>
				COPYRIGHT &copy; 2013 - JOHN JOHNSON. ALL RIGHTS RESERVED.
			</footer>
		</div>
		<?php
			require_once('admin/dbclose.php');
		?>
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery-ui.min.js"></script>
		<script src="js/isotope.pkgd.min.js"></script>
		<script src="js/script.js"></script>
	</body>
</html>