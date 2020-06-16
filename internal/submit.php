<!DOCTYPE html>
<html lang="en">
<?php
session_start();
$_SESSION["logged_in"] = true; 
$userid = $_SESSION["userid"];
$name = $_SESSION["name"];
$usr = $_SESSION["usr"];
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
  <meta http-equiv="Refresh" content="2; admin/filters_student.php?level=All&category=All&status=All" />
  <link rel="stylesheet" href="css/styles1.css">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&display=swap" rel="stylesheet">
  <title>Update</title>
</head>

<body>

  <?php

    $cmd = "SELECT * FROM sgss.users where userid='$userid'";

    // echo $cmd;
    $res = mysqli_query($conn, $cmd);
    $row=mysqli_fetch_assoc($res);
  
    $subject= $_POST["subject"];
    $description= $_POST["description"];
    $level= $_POST["level"];
    $category= $_POST["category"];
    $university= $row["university"];
    $college= $row["college"];
    $keyword= 'Unspecified';
    $sts= 'Unread';

    
    $adm = array('office', 'waiting', 'time', 'OP', 'pass', 'guidance', 'admin');
    $food=array('food', 'salt', 'spoilt', 'bitter', 'sour', 'hygene', 'oil');
    $infrastructure=array('infrastructure', 'class', 'room', 'board', 'labs', 'playground', 'court', 'building');
    $facilities=array('facilities', 'bathroom', 'toilet', 'mess', 'canteen', 'lab', 'library', 'transport', 'water', 'tap');
    $environment=array('environment', 'tree', 'pollut', 'plant', 'thorn', 'loud', 'nois');
    $maintenance=array('maintenance', 'neat', 'lock', 'broom', 'wash', 'clean', 'dirty', 'cleanliness');
    $staff = array('staff', 'punctual', 'attentive', 'misbehave', 'knowledge', 'late', 'dress', 'lecture', 'understand', 'prof', 'conduct');
    $drugs = array('drugs', 'alcohol', 'weed', 'tobacco', 'smoke');
    $money = array('commerce', 'money', 'fees', 'currupt', 'cash', 'amount');

    $keyarrays= array($food, $infrastructure, $facilities, $environment, $maintenance, $drugs, $staff, $money);

    foreach ($keyarrays as $ar) {
      foreach ($ar as $key){
        if (strpos($description, $key) !== false) {
          $keyword = $ar[0];
        }
      }
    }
      
    
    $sql = "INSERT INTO sgss.complaints(userid, email, subject,	description, level,	category,	university,	college, keyword,	sts) VALUES ('$userid', '$userid', '$subject', '$description', '$level', '$category', '$university', '$college', '$keyword', '$sts')";

    // echo $sql;
    $result = mysqli_query($conn, $sql);
  ?>
  <div class="container-special">
  <div class = "load">
  <img class = "load-img" src = "assets/load.gif" alt= "" width="50%"><br>
  <h2 class = "load-text">Submitting your complaint...</h2>
  </div>
  </div>
</body>

</html>
