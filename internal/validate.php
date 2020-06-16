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
  <!-- <meta http-equiv="Refresh" content="2; home.php" /> -->
  <link rel="stylesheet" href="css/styles1.css">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&display=swap" rel="stylesheet">
  <title>Update</title>
</head>

<body>

  <?php
  
    
    $userid=$_POST["userid"];
    $pwd=$_POST["pwd"];
    $usr=$_REQUEST["usr"];

    if (strcmp($usr, 'Student') == 0) {
      $sql = "SELECT * FROM sgss.users WHERE userid='$userid' and password='$pwd'";
    } else if (strcmp($usr, 'Member') == 0) {
      $sql = "SELECT * FROM sgss.members WHERE userid='$userid' and password='$pwd'";
    } else {
      $sql = "SELECT * FROM sgss.heads WHERE userid='$userid' and password='$pwd'";
    }

    // echo $sql;

    $result = mysqli_query($conn, $sql);
    $res = mysqli_fetch_assoc($result);
    $rows = mysqli_num_rows($result);

    if($rows == 1) {
      session_start();
      $_SESSION["logged_in"] = true;
      $_SESSION["userid"] = $userid;
      $_SESSION["name"] = $res["username"];

      if (strcmp($usr, "Student") == 0) {
        $_SESSION["usr"] = "Student";
        header("location:admin/filters_student.php?level=All&category=All&status=All");
      } else if (strcmp($usr, "Member") == 0){
        $_SESSION["usr"] = "Committee Member";
        header("location:admin/filters.php?level=All&category=All&status=All");
      } else if (strcmp($usr, "Head") == 0){
        $_SESSION["usr"] = "Head";
        header("location:admin/filters_head.php?level=All&category=All&status=All");
      }

    } else {
        header("location:login_wrong.php?usr=$usr");
    }

  ?>
  <div class="container-special">
    <div class = "load">
      <img class = "load-img" src = "assets/load.gif" alt= "" width="50%"><br>
      <h2 class = "load-text">Logging you in...</h2>
    </div>
  </div>
</body>

</html>
