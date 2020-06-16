<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Refresh" content="2; filters.php?level=All&category=All&status=All" />
  <link rel="stylesheet" href="../css/styles1.css">
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
        // $email = $_GET["mail"];

        $sql = "SELECT * FROM sgss.complaints where id = $id";

        $res = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($res);

        $cmd = "UPDATE sgss.complaints SET sts = '$cms' WHERE id = $id";
        $result = mysqli_query($conn, $cmd);

        if (strcmp($cms, "Sent") == 0) {
          $cmd = "UPDATE sgss.complaints SET hsts = 'Unread' WHERE id = $id";
          $result = mysqli_query($conn, $cmd);  
        }

        $to_email = $row["email"];
        switch ($cms) {
          case "Pending":
            $subject = 'Your complaint was validated.';
            $message = 'Hi, ' . $to_email . ', your complaint about ' . $row["subject"] . " was recieved and was put in pending list by our committee member. You\'ll be updated when your case was taken into account again. Thank you for reporting us.\nRegards,\nStudents Grievance Support System,\nGovernment of AP.";
          break;

          case "Spam":
            $subject = 'Your complaint was validated.';
            $message = 'Hi, ' . $to_email . ', your complaint about ' . $row["subject"] . " was recieved and was found to be inappropriate by our committee member. We request you to submit a well defined report again. Please do not spam such a dedicated community. We work hard to resolve students\' issues. Thank you for reporting us.\nRegards,\nStudents Grievance Support System,\nGovernment of AP.";
          break;

          case "Sent":
            $subject = 'Your complaint was validated.';
            $message = 'Hi, ' . $to_email . ', your complaint about ' . $row["subject"] . " was recieved and was sent to a higher official for further action, by a committee member. Actions to resolve your issue will be taken shortly. Thank you for reporting us.\nRegards,\nStudents Grievance Support System,\nGovernment of AP.";
          break;

          case "Completed":
            $subject = 'Your complaint was validated.';
            $message = 'Hi, ' . $to_email . ', your complaint about ' . $row["subject"] . " was recieved and a corresponding action to resolve the issue was made by a committee member. We hope your issue was resolved. We really appriciate that you stepped forward to report the issue. Thank you for reporting us.\nRegards,\nStudents Grievance Support System,\nGovernment of AP.";
          break;
          default:
            $subject = 'Testing PHP Mail';
            $message = 'This mail is sent using the PHP mail function';
        }
        $headers = 'From: noreply@sgss.com';
        mail($to_email,$subject,$message,$headers);
  ?>
  <div class="container-special">
  <div class = "load">
  <img class = "load-img" src = "../assets/load.gif" alt= "" width="50%"><br>
  <h2 class = "load-text">Updating your changes...</h2>
  </div>
  </div>
</body>

</html>
