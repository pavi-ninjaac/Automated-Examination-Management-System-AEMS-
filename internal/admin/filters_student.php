<!DOCTYPE html>
<?php
session_start();
$_SESSION["logged_in"] = true;        
$userid = $_SESSION["userid"];
$name = $_SESSION["name"];
$usr = $_SESSION["usr"];
// echo $name;
// echo $userid;
$category = $_REQUEST["category"];
$level = $_REQUEST["level"];
$status = $_REQUEST["status"];
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
      href="../assets/logo.png"><link href="../css/styles1.css" rel="stylesheet">
  <script src="../js/sort-table.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title>My Complaints</title>
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
  <div class="heading">
    <span class="page-head">
      My Complaints
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
    <div class="filters">
      <span class="filter-level">Level:
        <select  id = "LF" class="categories-list">
          <div class="options">
            <option class="option" value="All">All</option>
            <option class="option" value="University">University</option>
            <option class="option" value="College">College</option>
            <option class="option" value="Department">Department</option>
          </div>
        </select>
        <span class="filter-dept">Categories:
          <select id = "CF" class="categories-list">
            <div class="options">
              <option class="option" value="All">All</option>
              <option class="option" value="Admission">Admission</option>
              <option class="option" value="Exams">Exams</option>
              <option class="option" value="Finance">Finance</option>
              <option class="option" value="Lecture">Lecture</option>
              <option class="option" value="Ragging">Ragging</option>
              <option class="option" value="Syllabus">Syllabus</option>
              <option class="option" value="Other">Other</option>
            </div>
          </select>
        </span>
      </span>
        <span class="filter-dept">Status:
          <select id = "SF" class="categories-list">
            <div class="options">
              <option class="option" value="All">All</option>
              <option class="option" value="Completed">Completed</option>
              <option class="option" value="Responded">Responded</option>
              <option class="option" value="Withdrawn">Withdrawn</option>
            </div>
          </select>
        </span>
        
        <span class = "go-button">
          <button class="button-small" onclick="
              var  a = document.getElementById('LF');
              var level = a.options[a.selectedIndex].value;
              console.log(level);
              
              var  b = document.getElementById('CF');
              var category = b.options[b.selectedIndex].value;
              console.log(category);

              var  c = document.getElementById('SF');
              var status = c.options[c.selectedIndex].value;
              console.log(status);

              var link = 'filters_student.php?level=' + level + '&category=' + category + '&status=' + status;
              console.log(link);
              window.location.replace(link);
              ">
            <i class="material-icons-outlined md-18">arrow_forward_ios</i>
          </button>
        </span>
      </div>

    <table id="listTable" class="list-table js-sort-table">
      
      <?php 

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "sgss";

        $conn = mysqli_connect("$servername", "$username", "$password", "$dbname");
        if (!$conn) {
          die("Connection failed: " . mysqli_connect_error());
        }
        
        if (strcmp($level, "All") == 0) {
          if (strcmp($category, "All") == 0) {
            if (strcmp($status, "All") == 0){
              $sql = "SELECT * FROM sgss.complaints WHERE userid = \"" . $userid . "\" ORDER BY date DESC";
            } else {
              $sql = "SELECT * FROM sgss.complaints WHERE userid = \"" . $userid . "\"&& sts=\"" . $status . "\" ORDER BY date DESC";
            }
          }
          else {
            if (strcmp($status, "All") == 0){
              $sql = "SELECT * FROM sgss.complaints WHERE userid = \"" . $userid . "\"&& category=\"" . $category . "\" ORDER BY date DESC";
            } else {
              $sql = "SELECT * FROM sgss.complaints WHERE userid = \"" . $userid . "\"&& sts=\"" . $status . "\" && category=\"" . $category . "\" ORDER BY date DESC";
            }
          }
        } else {
          if (strcmp($category, "All") == 0) {
            if (strcmp($status, "All") == 0) {
              $sql = "SELECT * FROM sgss.complaints WHERE userid = \"" . $userid . "\"&& level=\"" . $level . "\" ORDER BY date DESC";
            } else {
              $sql = "SELECT * FROM sgss.complaints WHERE userid = \"" . $userid . "\"&& level=\"" . $level . "\" && sts=\"" . $status . "\" ORDER BY date DESC";
            }
          } else {
            if (strcmp($status, "All") == 0) { 
              $sql = "SELECT * FROM sgss.complaints WHERE userid = \"" . $userid . "\"&& level=\"" . $level . "\" && category=\"" . $category . "\" ORDER BY date DESC";
            } else {
              $sql = "SELECT * FROM sgss.complaints WHERE userid = \"" . $userid . "\"&& level=\"" . $level . "\" && category=\"" . $category . "\" && sts=\"" . $status . "\" ORDER BY date DESC";
            }
          }
        }

        // echo $sql;

        $result = mysqli_query($conn, $sql);

        $i=0;
        if (mysqli_num_rows($result) > 0) {
          ?>
          <tr id ="HeadRow">
            <th style="width:8%">Date</th>
            <th style="width:60%;">Subject</th>
            <th>Level</th>
            <th>Category</th>
            <th>Key words</th>
            <th>Status</th>
          </tr>
        <?php
          while($row = mysqli_fetch_assoc($result)) {
                    
          echo "<tr category =\"" . $row["category"] . "\" level =\"" . $row["level"] . "\" class=\"table-data\">";
          echo "<td>" . $row["date"] . "</td>";
          $id = $row["id"];
          echo "<td> <a href=\"details_student.php?id=". $id ."\">" . $row["subject"] . "</a></td>";
          echo "<td>" . $row["level"] . "</td>";
          echo "<td>" . $row["category"] . "</td>";
          echo "<td>" . $row["keyword"] . "</td>";
          echo "<td>" . $row["sts"] . "</td>";
          echo "</tr>";
          $i++;
          }  
        } else {
          $i=0;
        } 

        $result = mysqli_query($conn, "SELECT * FROM sgss.complaints");
        echo "Showing " . $i .  " result(s).";
        
        mysqli_close($conn);   
       ?>   
      </span>
    </table>
    <div class="buttons-pane">
      <span class ="button-left">
        <button class="button-gen" onclick="window.location.replace('../new.php');">
          <span class="button-icon"><i class="material-icons-outlined md-18">add_circle_outline</i></span>
          <span class="button-text">New Complaint</span>
        </button>
      </span>
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
    </span c>
  </div>
</footer>

<script>
  jQuery(document).ready(function(){
   document.getElementById("LF").value = <?php echo "\"" . $level . "\"" ?>;
   document.getElementById("CF").value = <?php echo "\"" . $category . "\"" ?>;
   document.getElementById("SF").value = <?php echo "\"" . $status . "\"" ?>;
});
</script>
</html>
