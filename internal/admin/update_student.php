<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Refresh" content="2; filters_student.php?level=All&category=All&status=All" />
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
        $cms = $_REQUEST["cmd"];

        $sql = "SELECT * FROM sgss.complaints where id = $id";

        $res = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($res);


        $cmd = "UPDATE sgss.complaints SET sts = '$cms' WHERE id = $id";
        $result = mysqli_query($conn, $cmd);
  ?>
  <div class="container-special">
  <div class = "load">
  <img class = "load-img" src = "../assets/load.gif" alt= "" width="50%"><br>
  <h2 class = "load-text">Updating your changes...</h2>
  </div>
  </div>
</body>

</html>
