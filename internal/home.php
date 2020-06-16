<!DOCTYPE html>
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

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&display=swap" rel="stylesheet">
  <link rel="icon" type="image/png" href="assets/logo.png">
  <link href="css/styles1.css" rel="stylesheet">
  <link href="css/styles2.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
  <title>Home | SGSS</title>
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
</head>
<?php
  $totQ = "SELECT * FROM sgss.users ";
  $coms = "SELECT * FROM sgss.complaints ";
  $totR = mysqli_query($conn, $totQ);
  $users = mysqli_num_rows($totR);

  $totc = mysqli_query($conn, $coms);
  $complaints = mysqli_num_rows($totc);

  $comq = mysqli_query($conn, $coms . "WHERE sts='Completed' || hsts='Completed'");
  $completed = mysqli_num_rows($comq);

  $penq = mysqli_query($conn, $coms . "WHERE sts='Pending' || hsts='Pending'");
  $pending = mysqli_num_rows($penq);

  $resq = mysqli_query($conn, $coms . "WHERE sts='Responded' || hsts='Responded'");
  $resp = mysqli_num_rows($resq);

  $spmq = mysqli_query($conn, $coms . "WHERE sts='Spam'");
  $spam = mysqli_num_rows($spmq);
?>
<body>
  <div class="container-home">
    <h2 class="total">Total Reports submitted: <?php echo $complaints;?>, Total students registered: <?php echo $users;?> </h2>
    <div class="progresses">
      <span class="pgrs-left">
        <progress value="<?php echo $completed/$complaints*100; ?>" max="100"></progress>
        Completed: <?php echo $completed; ?>
      </span>
      <span class="pgrs-right">
        <progress value="<?php echo $pending/$complaints*100; ?>" max="100"></progress>
        Pending: <?php echo $pending; ?>
      </span>
    </div><br>
    <div class="progresses">
      <span class="pgrs-left">
        <progress value="<?php echo $resp/$complaints*100; ?>" max="100"></progress>
        Responded: <?php echo $resp; ?>
      </span>
      <span class="pgrs-right">
        <progress value="<?php echo $spam/$complaints*100; ?>" max="100"></progress>
        Spams: <?php echo $spam; ?>
      </span>
    </div><br><br>
    <div class="login-button">
      <span class="button-left">
      <button class="button-gen" onclick="window.location.replace('login.php?usr=Student');" type="submit">
        <span class=" button-icon"><i class=" material-icons-outlined md-18">person_outline</i></span>
        <span class="button-text">Login</span>
      </button>
      </span>
      <span class="button-right">
      <button class="button-gen" onclick="window.location.replace('signup.html');" type="submit">
        <span class=" button-icon"><i class=" material-icons-outlined md-18">add</i></span>
        <span class="button-text">Sign Up</span>
      </button>
      </span>
    </div>
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
      The Student Grievance Support System (SGSS) portal is used for the Students to report their Grievance and issues
      if they affected by some difficulties. Student can report their Complaints under University/College/Department
      levels based on their Complaints the Action will be taken by the Committee Members.

      A committee member will read the Students Complaints and they validate the complaints.based on the validation
      committee member will mark it read, spam, reply through email, and the Complaints will be taken to the Head if the
      issues go on serious. The Head will take action under the Government of AP.
    </p>
  </div>
  <div class="copyright-notes">
    <span class="copyight-info">
      &copy; All rights reserved. 2019-2020, Government of AP.
    </span c>
  </div>
</footer>

</html>
