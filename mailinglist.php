<!DOCTYPE html>
<html>
<body>


<?php
$emailErr = "";
$email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
   if (empty($_POST["email"])) {
     $emailErr = "Email is required";
   } else {
    $email = test_input($_POST["email"]);
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$file_list = 'emails.txt';
	$handle = fopen($file_list, 'a') or die('Cannot open file:  '.$file_list);
	$new_data = "\n".$_POST["email"];
	fwrite($handle, $new_data);
	fclose($handle);
	}
   }
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>

</body>
</html>