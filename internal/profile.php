<!DOCTYPE html>
<?php
  session_start();
  $userid=$_SESSION["userid"];
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "sgss";
  $conn = mysqli_connect("$servername", "$username", "$password", "$dbname");
  if (!$conn) {
     die("Connection failed: " . mysqli_connect_error());
  }
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
      href="assets/logo.png">
  <link href="css/styles1.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title>My Profile | SGSS</title>
  <header class="top-bar">
    <span class="logo">
      <img class="header-image" src="assets/logo_p.png" alt="Government of Andra Pradesh"></img>
    </span>
    <span class="branding">
      <h1 class="header-text">
        Government of Andra Pradesh <br />
        ఆంధ్రప్రదేశ్ ప్రభుత్వం </br>
      </h1>
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
      My Profile
    </span>
  </div>
</head>

<body>
  <div class="container-special">
  <?php
    $q = "SELECT * FROM sgss.users WHERE userid='$userid'";
    $res = mysqli_query($conn, $q);
    $row = mysqli_fetch_assoc($res);
  ?>
    <form action="update_profile.php" onsubmit="return checkPass(this);" method="POST">
      Name:<br> <input type="text" class="text-box" name="name" value="<?php echo $row["username"];?>" required></input><br />
      Age:<br> <input type="number" class="num-box" name="age" value="<?php echo $row["age"];?>" required></input><br />
      Gender:<br>
      <select class="categories-list" name="sex" required>
        <option class="" value="Male">Male</option>
        <option class="" value="Female">Female</option>
        <option class="" value="Other">Other</option>
      </select>
      <br />
      University:<br> <input type="text" class="text-box" name="univ" value="<?php echo $row["university"];?>" required></input><br />
      College:<br> <input type="text" class="text-box" name="clg" value="<?php echo $row["college"];?>" required></input><br />
      Department:<br> <input type="text" class="text-box" name="dept" value="<?php echo $row["department"];?>" required></input><br />
      E-Mail:<br> <input type="email" class="text-box" name="mail" value="<?php echo $row["email"]?>" required></input><br />
      Mobile:<br> <input type="tel" class="text-pass" name="mob" value="<?php echo $row["mobile"];?>" required></input><br />
      Password:<br> <input id="orp" type="text" class="text-pass" value="<?php echo $row["password"];?>" name="pwd" required></input><br>
      
      Re-enter password:<br> <input id="orp" type="text" class="text-pass" value="<?php echo $row["password"];?>" name="pwd" required></input><br>
      <button class="button-gen" type="submit">
        <span class="button-icon"><i class=" material-icons-outlined md-18">cloud_done</i></span>
        <span class="button-text">Save Changes</span>
      </button>

    </form>
    <span class="button-left" style="margin-left: -50px;">
      <button class="button-gen" onclick="window.location.replace('profile.php');" style="margin-left: 50px;">
        <span class="button-icon"><i class=" material-icons-outlined md-18">refresh</i></span>
        <span class="button-text">Reset</span>
      </button>
    </span>
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
    </span c>
  </div>
</footer>

<script>
  function checkPass(signUpForm) {
    if (signUpForm.pwd.value == signUpForm.cpwd.value) {
    } else {
      alert("Password and confirm passwords are different.");
      return false;
    }
    if ((signUpForm.pwd.value).length >= 6) {
    } else {
      alert("Password should contain atleast six characters.");
      return false;
    }
    if (signUpForm.age.value >= 15) {
      return true;
    } else {
      alert("Go away kid!");
      return false;
    }
  }
</script>

</html>
