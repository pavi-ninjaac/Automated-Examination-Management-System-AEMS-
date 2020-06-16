<?php
  $to_email = 'akrishnamoorthy007@gmail.com';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: noreply@sgss.com';
mail($to_email,$subject,$message,$headers);
?>
