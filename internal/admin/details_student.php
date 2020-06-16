<!DOCTYPE html>
<?php

session_start();
$_SESSION["logged_in"] = true;       
$userid = $_SESSION["userid"];
$name = $_SESSION["name"];
$usr = $_SESSION["usr"];
?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&display=swap" rel="stylesheet">
  <link rel="icon" 
      type="image/png" 
      href="../assets/logo.png"><link href="../css/styles2.css" rel="stylesheet">
  <title>Subject</title>
  <header class="top-bar">
    <span class="title-left-pane">
      <span class="logo">
        <img class="header-image" src="../assets/logo_p.png" alt="Government of Andhra Pradesh"></img>
      </span>
      <span class="branding">
        <h1 class="header-text">
          Government of Andhra Pradesh <br />
          ఆంధ్రప్రదేశ్ ప్రభుత్వం </br>
        </h1>
      </span>
    </span>
    <span class="date-time">
      <iframe src="http://free.timeanddate.com/clock/i73ldroc/n553/fn16/fcfff/tct/pct/tt0/tw0/tm1/td2/th2/tb4"
        frameborder="0" width="84" height="34" allowTransparency="true"></iframe>
    </span>
    <span class="nav-bar">
      <h2>
        Students Grievance Support System
        <span class="nav">
          <span class="dropdown">
            <button class="dropbtn"><i class="material-icons-outlined md-18">menu</i></button>
            <div class="dropdown-content">
              <a href="../about.html">About</a>
              <a href="../Contact.html">Contact</a>
              <a href="#">More</a>
            </div>
          </span>
          <a class="nav-links" href="../help.html"><i class="material-icons-outlined md-18">help_outline</i></a>
          <a class="nav-links" href="../home.php"><i class="material-icons-outlined md-18">home</i></a>
        </span>
      </h2>
    </span>
  </header>
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
        $sql = "SELECT * FROM sgss.complaints where id = $id";
        $result = mysqli_query($conn, $sql);
        $report = mysqli_fetch_assoc($result);
?>
  <div class="heading">
    <span class="complaint-sub">
      <?php echo $report["subject"] ?>
    </span>
    <span class="dropdown-user">
      <button class="dropbtn"><span class="user-info">
        <span class="info-text">
        <p>
          <?php echo $name; ?> <br />
          <?php echo $usr; ?>
        </p>
        </span>
        <span class="img-user">
          <img class="user-image" src="../assets/user.png" width="50" height="50">
        </span>
      </span>
    </button>
    <div class="dropdown-content-user">
      <a href="../profile.php"> Profile</a>
      <a href="../logout.php"> Log out</a>
    </div>
  </div>
</head>


<body>
  <div class="container">
    <div class="details">
      <table class="detail-table">
        <tr>
          <td class="left"> Level : </td>
          <td><?php echo $report["level"] ?></td>
        </tr>
        <tr>
          <td class="left"> University : </td>
          <td><?php echo $report["university"] ?></td>
        </tr>
        <tr>
          <td class="left"> College : </td>
          <td><?php echo $report["college"] ?></td>
        </tr>
        <tr>
          <td class="left">Category : </td class="left">
          <td><?php echo $report["category"] ?></td>
        </tr>
        <tr>
          <td class="left">Current Status : </td class="left">
          <td><?php echo $report["sts"] ?></td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td class="left">Keywords : </td class="left">
          <td><span class = "key"><?php echo $report["keyword"] ?></span></td>
        </tr>
      </table>
    </div>
    <div class="message">
      <textarea readonly class="message-box">
        <?php 
          echo $report["description"];
        ?>
      </textarea>
    </div>
    <div class="actions">
      <span class ="button-left">
      <button class="button" alt="Print Screen" onclick="window.print();">
        <span class="button-icon"><i class="material-icons-outlined md-18">print</i></span>
        <span class="button-text">Print Report</span>
      </button>
      </span>

      <span class="button-right">
      <?php echo "<button onclick=window.location.replace(\"update_student.php?id=". $id . "&cmd=Withdrawn\"); class=\"button-alert\">" ?>
        <span class="button-icon"><i class="material-icons-outlined md-18">cancel</i></span>
        <span class="button-text">Withdraw</span>
      </button>
      </span>
      </div>
    </div>
  </div>
</body>
<footer class="footer">
  <div class="quick-links">
    <p>
      <a href="../home.php">Home</a> |
      <a href="../Contact.html">Contact</a> |
      <a href="../Feedback.html">Feedback</a> |
      <a href="../privacy.html">Privacy</a>
    </p>
  </div>
  <div class="contents">
    <p class="footer-text">
      The Student Grievance Support System (SGSS) portal is used for the Students to report their Grievance and issues if they affected by some difficulties. Student can report their Complaints under University/College/Department levels based on their Complaints the Action will be taken by the Committee Members.

A committee member will read the Students Complaints and they validate the complaints.based on the validation committee member will mark it read, spam, reply through email, and the Complaints will be taken to the  Head if the issues go on serious. The Head will take action under the Government of AP.
    </p>
  </div>
  <div class="copyright-notes">
    <span class="copyight-info">
      &copy; All rights reserved. 2019-2020, Government of AP.
    </span>
  </div>
</footer>

</html>
