<?php include 'config1.php';?>
<?php
	session_start();
	//echo"Take a view here";
	$suid = $_SESSION['uid'];
	//echo $suid;

	$query_subject = "SELECT subject.name, subject.id from subject 
INNER JOIN user_subject WHERE user_subject.id = subject.id AND user_subject.uid = $suid  ORDER BY subject.name";
	$sub=$conn->query($query_subject);
	$rsub=$sub->fetchAll(PDO::FETCH_ASSOC);
	//print_r($rsub);
	$subnm=$rsub[0]['name'];
	$subid=$rsub[0]['id'];
	//echo "<h3>".$subnm." ".$subid."</h3>";
	echo "<br><center><h2>TAKE VIEW </h2></center><br>";

	echo "<br><strong>subject<strong> <br> ";
	echo"<form action='' method='GET'>";
	echo "<select name='subject' class='form-control' required='required'>";
	for($i = 0; $i<count($rsub); $i++)
	{
		if ($_GET['subject'] == $rsub[$i]['id']) {
			echo"<option value='". $rsub[$i]['id']."' selected='selected'>".$rsub[$i]['name']."</option>";
		}
		else {
			echo"<option value='". $rsub[$i]['id']."'>".$rsub[$i]['name']."</option>";
		}
	}
	echo "</select><br>";

	echo"select start date:<input type='date' name='sdate'><br>";
	echo"select end date:<input type='date' name='edate'><br>";
	echo"<input type='submit' value='Load Data' name='submit'>";
	echo "</form>";
?>
<?php

	
	$t=time();

	if(isset($_GET['submit']) && !empty($_GET['sdate']) && !empty($_GET['edate']) && ($_GET['edate'] > $_GET['sdate']) && ($_GET['sdate']<$t) && ($_GET['edate']<$t))
	{
		$sdat = $_GET['sdate'];
		$edat= $_GET['edate'];

		$selsub=$_GET['subject'];
		
		$sdate = strtotime($sdat);
		
		$edate = strtotime($edat);
		echo "sub id".$selsub."<br>";
		echo "user id".$suid."<br>";
		echo "starting date:".$sdat." "."ending date:".$edat."<br>";
		$query_student="SELECT * from student ";
		$stu=$conn->query($query_student);
		$rstu=$stu->fetchAll(PDO::FETCH_ASSOC);
	//	print_r($rstu);
		echo"<br><br>--------------<br>";
		echo"<table border='2'>";
		echo"<tr>";
		echo"<td colspan='3'>Roll No</td>";
		for($k=$sdate;$k<=$edate;$k=$k+86400)
		{
			$thisDate = date( 'Y-m-d', $k );
			$weekday= date("l", $k );
			$normalized_weekday = strtolower($weekday);
			if(($normalized_weekday!="saturday") && ($normalized_weekday!="sunday"))
			{
				echo "<td colspan='3'>".$thisDate."</td>";
			}
		}
		echo"<td colspan='3'>pres/total</td>";
		echo"<td colspan='3'>percent</td>";;
		echo"</tr>";
		for($i=0;$i<count($rstu);$i++)
		{
			//echo $i."--"."<br>";
			$present=0;
			$absent=0;
			$totlec=0;
			$perc=0;
			echo"<tr><td colspan='3'>".$rstu[$i]['rollno']."</td>";
			$dsid=$rstu[$i]['sid'];
			
			for($j=$sdate;$j<=$edate;$j=$j+86400)
			{
				 //$thisDate = date( 'Y-m-d', $j );
				 //echo "$j"."=".$thisDate."<br>";
	
				$weekday= date("l", $j );
				$normalized_weekday = strtolower($weekday);
				 if(($normalized_weekday!="saturday") && ($normalized_weekday!="sunday"))
				 {


					 $sql = "SELECT sid ,ispresent FROM attendance WHERE sid=$dsid AND
					 id=$selsub AND date=$j AND $suid=uid " ;
					$stmt = $conn->prepare($sql); 
					$stmt->execute();
					$result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
					if(!empty($result)){
					//print_r($result);
						$totlec++;
						if($result[0]['ispresent']==1)
						{
							$present++;
							echo"<td colspan='3'>P</td>";
						}
						else
						{
							echo"<td colspan='3'>A</td>";
							$absent++;
						}
					}else
					{
						echo"<td colspan='3'>NT</td>";
					}
				}
			}
			$perc=(($present*100)/$totlec);
			echo"<td colspan='3'>".$present."/".$totlec."</td>";
			echo"<td colspan='3'>".$perc."</td>";
			echo"</tr>";
			
			}		
		echo"</table>";

	}else{
		echo"<h3>Please enter detail</h3>";
	}



?>