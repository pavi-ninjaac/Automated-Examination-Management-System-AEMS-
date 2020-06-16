<!DOCTYPE html>
<?php
        session_start();
$_SESSION["logged_in"] = true;
        ?>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>

<body>
  
<?php
$id = $_REQUEST["id"];
$cmd = $_REQUEST["cmd"];
echo $id;
echo $cmd;

?>
</body>

</html>
