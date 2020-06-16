<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Refresh" <?php 
  $from = $_REQUEST["from"];
  if (strcmp($from, 'Head') == 0) {
    echo 'content="1; filters_head.php?level=All&category=All&status=All"';
  } else 
  echo 'content="1; filters.php?level=All&category=All&status=All"';
  
  ?> 
  />
  <link rel="stylesheet" href="../css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&display=swap" rel="stylesheet">
  <title>Update</title>
</head>

<body>

  <?php

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "sgss";

        $conn = mysqli_connect("$servername", "$username", "$password", "$dbname");
        if (!$conn) {
          die("Connection failed: " . mysqli_connect_error());
        }
        
        $id = $_REQUEST["id"];
        $from = $_REQUEST["from"];
        $cms = $_POST["description"];
        // echo $cms;

        $sql = "SELECT * FROM sgss.complaints where id = $id";

        $res = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($res);

        $to_email = $row["email"];
        $subject = 'Reply from Students\' Grievance Support System';
        $message = 'Hi, ' . $to_email . ', your complaint about ' . $row["subject"] . " was validated.\nOur " . $from . " replied you as follows:\n" . $cms;
        
        $cmd = "UPDATE sgss.complaints SET sts = 'Responded' WHERE id = $id";
        $result = mysqli_query($conn, $cmd);

        // echo $message;
        $headers = 'From: noreply@sgss.com';
        mail($to_email,$subject,$message,$headers);
  ?>
  <div class="container-special">
  <div class = "load">
  <img class = "load-img" src = "../assets/load.gif" alt= "" width="50%"><br>
  <h2 class = "load-text">Sending message to student...</h2>
  </div>
  </div>
</body>

</html>
