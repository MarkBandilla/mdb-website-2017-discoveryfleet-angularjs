<?php

// var_dump($_POST); die();

require_once 'phpmailer/PHPMailerAutoload.php';

$mailer = new PHPMailer;

// $mailer->SMTPDebug = 2;

$mailer->isSMTP();
$mailer->SMTPAuth = true;

$mailer->Host = "mail.discoveryfleet.com";
$mailer->Username = "info@discoveryfleet.com";
$mailer->Password = "dfleet2017";
$mailer->SMTPSecure = "ssl";
$mailer->Port = 465;

$mailer->isHTML();

if($_POST['type'] == 'booking') {
	$mailer->Subject = "Booking";
	$mailer->Body = "From: ". $_POST['name'] .
	" ( " . $_POST['email'] . " )<br> " .
	"Contact: " . $_POST['phone'] . "<br> " .
	"Destination: " . $_POST['destination'] . "<br> " .
	"Date: " . $_POST['checkIn'] . " - " . $_POST['checkOut'] . "<br> " .
	"Message: <br>" . $_POST['message'];
} elseif($_POST['type'] == 'subscribe') {
	$mailer->Subject = "Subscription";
	$mailer->Body = "Subscriber: ". $_POST['email'];
}

$mailer->setFrom("info@discoveryfleet.com", "DiscoveryFleet");

$mailer->AddAddress("info@discoveryfleet.com", "DiscoveryFleet");
$mailer->AddCC("yvetteclee@gmail.com", "yvetteclee");

if($mailer->send()) {
	echo "success";
} else {
	// echo "Mailer Error: " . $mail->ErrorInfo;
	echo "failed";
}