<!doctype html>
<html lang="en">
  <head>
    <title>MYCAR</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <style>
        body
        {
            background-image: url(front-left-side-47.jpg);
        }

        .exchange
        {
          padding: 70px;


        }
        #res
        {
          margin-left: 450px;
        }

        .inputbar
        {
          padding: 10px;
        }

      </style>


  </head>
  <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="main.html">MYCAR</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">EXCHANGE CAR <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="explore_first.php">EXPLORE<span class="sr-only"></span></a>
      </li>
    </ul>
  </div>
</nav>
<div class="container exchange">
  <form action="exchange.php" method="POST">
  <div class="input-group mb-3 inputbar">
  <div class="input-group-prepend">
    <button class="btn btn-outline-warning" type="button"> BRAND </button>
  </div>
  <select name="brand" class="custom-select" id="inputGroupSelect03">
    <option value="" selected>Choose...</option>
    <?php
    $con=mysqli_connect("localhost","root","","car");
    $sql_title = "SELECT DISTINCT `title` FROM car";
    $r_title = mysqli_query($con, $sql_title);
    if (mysqli_num_rows($r_title) > 0)
     {
      // output data of each row
      while($row_title = mysqli_fetch_assoc($r_title))
      {?><option value="<?php
       echo $row_title["title"] ;?>"><?php
       echo $row_title["title"] ;?></option>
     <?php }
     }
     ?>


  </select>

  <div class="input-group mb-3 inputbar">
  <div class="input-group-prepend">
    <button class="btn btn-outline-warning" type="button"> BODY </button>
  </div>
  <select name="body" class="custom-select" id="inputGroupSelect03">
    <option selected>Choose...</option>
    <?php
    $con=mysqli_connect("localhost","root","","car");
    $sql_body = "SELECT DISTINCT `body` FROM car";
    $r_body = mysqli_query($con, $sql_body);
    if (mysqli_num_rows($r_body) > 0)
     {
      // output data of each row
      while($row_body = mysqli_fetch_assoc($r_body))
      {?><option value="<?php
       echo $row_body["body"] ;?>"><?php
       echo $row_body["body"] ;?></option>
     <?php }
     }
     ?>

  </select>

  <div class="input-group mb-3 inputbar">
  <div class="input-group-prepend">
    <button class="btn btn-outline-warning" type="button">ENG. TYPE</button>
  </div>
  <select name="engType" class="custom-select" id="inputGroupSelect03">
    <option selected>Choose...</option>
    <?php
    $con=mysqli_connect("localhost","root","","car");
    $sql_engType = "SELECT DISTINCT `engType` FROM car";
    $r_engType = mysqli_query($con, $sql_engType);
    if (mysqli_num_rows($r_engType) > 0)
     {
      // output data of each row
      while($row_engType = mysqli_fetch_assoc($r_engType))
      {?><option value="<?php
       echo $row_engType["engType"] ;?>"><?php
       echo $row_engType["engType"] ;?></option>
     <?php }
     }
     ?>

  </select>



  <div class="input-group mb-3 inputbar">
  <div class="input-group-prepend">
    <button class="btn btn-outline-warning" type="button">MODEL</button>
  </div>
  <select name="model" class="custom-select" id="inputGroupSelect03">
    <option selected>Choose...</option>
    <?php
    $con=mysqli_connect("localhost","root","","car");
    $sql_model = "SELECT DISTINCT `model` FROM car";
    $r_model = mysqli_query($con, $sql_model);
    if (mysqli_num_rows($r_model) > 0)
     {
      // output data of each row
      while($row_model = mysqli_fetch_assoc($r_model))
      {?><option value="<?php
       echo $row_model["model"] ;?>"><?php
       echo $row_model["model"] ;?></option>
     <?php }
     }
     ?>

  </select>

</div>
<button type="submit" name="res" class="btn btn-primary" id="res">Submit</button>
</form>

</div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
