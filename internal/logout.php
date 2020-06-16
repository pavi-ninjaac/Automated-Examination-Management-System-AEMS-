<?php

session_start();
$_SESSION["logged_in"] = false;
session_destroy();
session_abort();

header("Location: home.php");
?>

