<!DOCTYPE html>
<html lang="en">
<?php
  session_start();
  $curr_id=$_SESSION["userid"];
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
  <meta http-equiv="Refresh" content="2; login.php?usr=Student" />
  <link rel="stylesheet" href="css/styles1.css">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&display=swap" rel="stylesheet">
  <title>Update</title>
</head>

<body>

  <?php
  
    $name=$_POST["name"];
    $age=$_POST["age"];
    $sex=$_POST["sex"];
    $univ=$_POST["univ"];
    $clg=$_POST["clg"];
    $dept=$_POST["dept"];
    $mail=$_POST["mail"];
    $mob=$_POST["mob"];
    $pwd=$_POST["pwd"];
    $userid= $mail;

    $sql = "UPDATE sgss.users SET userid ='$userid', username='$name', age='$age', gender='$sex', university='$univ', college='$clg', department='$dept', email='$mail', mobile='$mob', password='$pwd' WHERE userid='$curr_id'";

    $upcomps = "UPDATE sgss.complaints SET userid='$userid', email='$mail' WHERE userid = '$curr_id'";

    // echo $sql;
    $result = mysqli_query($conn, $sql);
    $result2 = mysqli_query($conn, $upcomps);
    // $ros = mysqli_num_rows($result2);
    
    
    $to_email = $userid;
    $subject = 'Account updated successfully';
    $message = 'Hi ' . $name . ", your account on Students' Grievance Support System was updated successfully.\nRegards, \nSGSS Team, \nGovernment of AP.";
    $headers = 'From: noreply@sgss.com';
    mail($to_email,$subject,$message,$headers);
    mail($curr_id,$subject,$message,$headers);
  ?>
  <div class="container-special">
  <div class = "load">
  <img class = "load-img" src = "assets/load.gif" alt= "" width="50%"><br>
  <h2 class = "load-text">Updating your profile...</h2>
  </div>
  </div>
</body>

</html>
