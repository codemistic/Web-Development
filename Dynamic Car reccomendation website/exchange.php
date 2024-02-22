<?php
if(isset($_POST['res'])){
$brand = $_POST['brand'];
$body = $_POST['body'];
$engType = $_POST['engType'];
$model = $_POST['model']
}
$brand = stripcslashes($brand);
$body = stripcslashes($body);
$engType = stripcslashes($engType);
$model = stripcslashes($model);

$con=mysqli_connect("localhost","root","","car");

$sql = " SELECT * FROM `car` WHERE title='$brand' AND body='$body' AND engType='$engType' AND model='$model'";
$r = mysqli_query($con, $sql);
$ro = mysqli_fetch_assoc($r);
$h = $ro["R1"] ;
$i = $ro["R2"] ;
$j = $ro["R3"] ;
$k = $ro["R4"] ;
$l = $ro["R5"] ;
?>
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
        .carousel-item
        {
          color: red;
          text-align: center;
          background-image: url(329997.jpg);
          margin-top: 50px;
        }

        .carousel-control-prev-icon
        {
          background-color: black;
          margin-top: 50px;
        }
        .carousel-control-next-icon
        {
          background-color: black;
          margin-top: 50px;
        }
        .caption
        {
          color: black;
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
        <a class="nav-link" href="exchange_first.php">EXCHANGE CAR <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="explore_first.php">EXPLORE <span class="sr-only"></span></a>
      </li>
    </ul>
  </div>
</nav>
<div class="container">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <h1><span class="caption">BRAND:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$h'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["title"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MODEL:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$h'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["model"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">BODY:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$h'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["body"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">MILEAGE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$h'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["mileage"] ;
        echo $h1;
        ?>kmph</h1>


        <h1><span class="caption">ENG. TYPE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$h'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["engType"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MFG. YEAR:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$h'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["year"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">PRICE:</span>Rs.<?php
        $sql1 = " SELECT * FROM `car` WHERE id='$h'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["price"] ;
        echo $h1;
        ?></h1>
      </div>
      <div class="carousel-item">
        <h1><span class="caption">BRAND:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$i'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["title"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MODEL:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$i'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["model"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">BODY:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$i'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["body"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">MILEAGE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$i'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["mileage"] ;
        echo $h1;
        ?>kmph</h1>


        <h1><span class="caption">ENG. TYPE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$i'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["engType"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MFG. YEAR:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$i'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["year"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">PRICE:</span>Rs.<?php
        $sql1 = " SELECT * FROM `car` WHERE id='$i'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["price"] ;
        echo $h1;
        ?></h1>
      </div>


      <div class="carousel-item">
        <h1><span class="caption">BRAND:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$j'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["title"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MODEL:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$j'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["model"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">BODY:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$j'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["body"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">MILEAGE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$j'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["mileage"] ;
        echo $h1;
        ?>kmph</h1>


        <h1><span class="caption">ENG. TYPE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$j'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["engType"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MFG. YEAR:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$j'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["year"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">PRICE:</span>Rs.<?php
        $sql1 = " SELECT * FROM `car` WHERE id='$j'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["price"] ;
        echo $h1;
        ?></h1>
      </div>


      <div class="carousel-item">
        <h1><span class="caption">BRAND:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$k'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["title"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MODEL:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$k'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["model"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">BODY:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$k'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["body"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">MILEAGE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$k'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["mileage"] ;
        echo $h1;
        ?>kmph</h1>


        <h1><span class="caption">ENG. TYPE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$k'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["engType"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MFG. YEAR:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$k'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["year"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">PRICE:</span>Rs.<?php
        $sql1 = " SELECT * FROM `car` WHERE id='$k'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["price"] ;
        echo $h1;
        ?></h1>
      </div>
      <div class="carousel-item">
        <h1><span class="caption">BRAND:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$l'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["title"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MODEL:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$l'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["model"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">BODY:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$l'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["body"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">MILEAGE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$l'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["mileage"] ;
        echo $h1;
        ?>kmph</h1>


        <h1><span class="caption">ENG. TYPE:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$l'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["engType"] ;
        echo $h1;
        ?></h1>

        <h1><span class="caption">MFG. YEAR:</span><?php
        $sql1 = " SELECT * FROM `car` WHERE id='$l'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["year"] ;
        echo $h1;
        ?></h1>


        <h1><span class="caption">PRICE:</span>Rs.<?php
        $sql1 = " SELECT * FROM `car` WHERE id='$l'";
        $r1 = mysqli_query($con, $sql1);
        $ro1 = mysqli_fetch_assoc($r1);
        $h1 = $ro1["price"] ;
        echo $h1;
        ?></h1>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
