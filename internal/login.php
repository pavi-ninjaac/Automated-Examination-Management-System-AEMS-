<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&display=swap" rel="stylesheet">
  <link rel="icon" 
      type="image/png" 
      href="assets/logo.png">
  <link href="css/styles1.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title>Login | SGSS</title>
  <header class="top-bar">
    <span class="title-left-pane">
      <span class="logo">
        <img class="header-image" src="assets/logo_p.png" alt="Government of Andhra Pradesh"></img>
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
              <a href="about.html">About</a>
              <a href="Contact.html">Contact</a>
              <a href="#">More</a>
            </div>
          </span>
          <a class="nav-links" href="help.html"><i class="material-icons-outlined md-18">help_outline</i></a>
          <a class="nav-links" href="home.php"><i class="material-icons-outlined md-18">home</i></a>
        </span>
      </h2>
    </span>
  </header>
  <div class="heading">
    <span class="page-head">
      Login
    </span>
  </div>
</head>

<body>
  <div class="container-special">
    <form action="validate.php?usr=<?php echo $_REQUEST["usr"];?>" method="POST">

      I am a<br>
      <select id="selUsr" class="categories-list" style="margin-bottom:5px;" onchange="
        var  a = document.getElementById('selUsr');
        var usr = a.options[a.selectedIndex].value;
        var link = 'login.php?usr=' + usr;
        console.log(link);
        window.location.replace(link);
      ">
        <option class="option" value="Student">Student</option>
        <option class="option" value="Member">Member</option>
        <option class="option" value="Head">Head</option>
      </select><br>

      Email ID: <br> <input type="text" name="userid" class="text-box" required></input><br />
      Password: <br> <input type="password" name="pwd" class="text-pass" required></input><br>
      <button class="button-gen" type="submit">
        <span class="button-icon"><i class=" material-icons-outlined md-18">arrow_forward</i></span>
        <span class="button-text">Login</span>
      </button>
    </form>

    <br>
    <a href="signup.html">Sign Up</a> | <a href="forgot.html">Forgot Password</a>
    <br>
    <br>
      Make sure you select the current user type from "I am a" list box.
  </div>
</body>
<footer class="footer">
  <div class="quick-links">
    <p>
      <a href="home.php">Home</a> |
      <a href="Contact.html">Contact</a> |
      <a href="Feedback.html">Feedback</a>
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
    </span c>
  </div>
</footer>
<script>
  jQuery(document).ready(function(){
    <?php $usr = $_REQUEST["usr"];?>
   document.getElementById("selUsr").value = <?php echo "\"" . $usr . "\"" ?>;
  });
  </script>
</html>
