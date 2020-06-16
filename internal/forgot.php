<!DOCTYPE html>
<html lang="en">
<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "sgss";
  $conn = mysqli_connect("$servername", "$username", "$password", "$dbname");
  if (!$conn) {
     die("Connection failed: " . mysqli_connect_error());
  }
?>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Refresh" content="2; home.php" />
  <link rel="stylesheet" href="css/styles1.css">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&display=swap" rel="stylesheet">
  <title>Update</title>
</head>

<body>

  <?php

    $mail= $_POST["mail"];
    $cmd = "SELECT * FROM sgss.users where userid='$mail'";

    // echo $sql;
    $result = mysqli_query($conn, $cmd);
    $row = mysqli_num_rows($result);
    if ($row == 1) {
      $ans = mysqli_fetch_assoc($result);
      $subject = 'Your SGSS Password';
      $message = 'Your password is " ' . $ans["password"] . ' "';
      $headers = 'From: noreply@sgss.com';
      mail($mail,$subject,$message,$headers);
    } else {
      header("Location:forgot_err.html");
    }
  ?>
  <div class="container-special">
  <div class = "load">
  <img class = "load-img" src = "assets/load.gif" alt= "" width="50%"><br>
  <h2 class = "load-text">Sending mail...</h2>
  </div>
  </div>
</body>

</html>
