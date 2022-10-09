<?php 

use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception; 

require 'vendor/autoload.php'; 

// php code to get form values

$name    = $_POST['name'];
$email= $_POST['email'];
$Body= $_POST['msg'];
$phone= $_POST['phone'];
$subject= $_POST['subject'];

echo"$name";
echo"$email";
echo"$Body";
echo"$phone";
echo"$subject";


// php mailer code to send email
$mail = new PHPMailer(true); 

try { 
	$mail->SMTPDebug = 2;									 
	$mail->isSMTP();											 
	$mail->Host	 = 'smtp.covidtimes.xyz';					 
	$mail->SMTPAuth = true;							 
	$mail->Username = '_mainaccount@covidtimes.xyz';				 
	$mail->Password = '';						 
	$mail->SMTPSecure = 'ssl';							 
	$mail->Port	 = 465; 

	$mail->setFrom('mail@covidtimes.xyz', 'Admin');		 
	$mail->addAddress($email); 
	$mail->addAddress('info@covidtimes.xyz', 'Person Two');

	
	$mail->isHTML(false);								 
	$mail->Subject = $subject;
	$mail->Body = $msg; 
	$mail->send(); 
	echo "Mail has been sent successfully!"; 
} catch (Exception $e) { 
	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"; 
} 

?> 
