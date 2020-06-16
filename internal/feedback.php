

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Refresh" content="2; home.php" />
  <link rel="stylesheet" href="css/styles1.css">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,600&display=swap" rel="stylesheet">
  <title>Update</title>
</head>

<body>

  <?php
$feed=$_POST["feedback"];

$to_email = 'febacksgss@gmail.com';
$subject = 'Feedback on SGSS';
$headers = 'From: noreply@sgss.com';
mail($to_email,$subject,$feed,$headers);
?>

  <div class="container-special">
  <div class = "load">
  <img class = "load-img" src = "assets/load.gif" alt= "" width="50%"><br>
  <h2 class = "load-text">Sending your valuable feedback...</h2>
  </div>
  </div>
</body>

</html>
