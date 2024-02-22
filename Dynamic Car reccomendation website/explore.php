<?php
if(isset($_POST['res1']))
  {
    $brand = $_POST['brand'];
    $body = $_POST['body'];
    $engType = $_POST['engType'];
    $model = $_POST['model'];
  }
$brand = stripcslashes($brand);
$body = stripcslashes($body);
$engType = stripcslashes($engType);
$model = stripcslashes($model);

$con=mysqli_connect("localhost","root","","car");

if ($body == "NULL" and $model == "NULL" and $engType == "NULL")
{
  $sql = " SELECT * FROM `car` WHERE title='$brand'";
}
elseif ($brand == "NULL" and $model == "NULL" and $engType == "NULL") {
  $sql = " SELECT * FROM `car` WHERE body='$body'";
}
elseif ($brand == "NULL" and $model == "NULL" and $body == "NULL") {
  $sql = " SELECT * FROM `car` WHERE engType='$engType'";
}
elseif ($brand == "NULL" and $engType == "NULL" and $body == "NULL") {
  $sql = " SELECT * FROM `car` WHERE model='$model'";
}
elseif ($brand == "NULL" and $model == "NULL") {
  $sql = " SELECT * FROM `car` WHERE engType='$engType' AND body='$body'";
}
elseif ($body == "NULL" and $engType == "NULL") {
  $sql = " SELECT * FROM `car` WHERE title='$brand' AND model='$model'";
}
elseif ($brand == "NULL" and $engType == "NULL") {
  $sql = " SELECT * FROM `car` WHERE model='$model' AND body='$body'";
}
elseif ($body == "NULL" and $model == "NULL") {
  $sql = " SELECT * FROM `car` WHERE engType='$engType' AND title='$brand'";
}
elseif ($brand == "NULL" and $body == "NULL") {
  $sql = " SELECT * FROM `car` WHERE engType='$engType' AND model='$model'";
}
elseif ($engType == "NULL" and $model == "NULL") {
  $sql = " SELECT * FROM `car` WHERE title='$brand' AND body='$body'";
}
elseif ($brand == "NULL") {
  $sql = " SELECT * FROM `car` WHERE engType='$engType' AND body='$body' AND model='$model'";
}
elseif ($body == "NULL") {
  $sql = " SELECT * FROM `car` WHERE engType='$engType' AND brand='$brand' AND model='$model'";
}
elseif ($engType == "NULL") {
  $sql = " SELECT * FROM `car` WHERE title='$brand' AND body='$body' AND model='$model'";
}
elseif ($model == "NULL") {
  $sql = " SELECT * FROM `car` WHERE engType='$engType' AND body='$body' AND title='$brand'";
}
else {
  $sql = " SELECT * FROM `car` WHERE engType='$engType' AND body='$body' AND title='$brand' AND model='$model'";
}
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

        .caption
        {
          color: black;
          background-image: url(329997.jpg);
          b
        }

        .caption:hover
        {
          color: white;
          background-image: url(front-left-side-47.jpg);
          font-size: 100px;
          border-radius: 15px;
        }
        .list-group
        {
          padding-bottom: 5px;
          color: inherit;
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
    <?php
      $r = mysqli_query($con, $sql);
      if (mysqli_num_rows($r) > 0)
      {
        // output data of each row
        while($row = mysqli_fetch_assoc($r))
        {
          $h=$row["id"];?>
          <ul class="list-group">
            <li class="list-group-item"><span class="caption">BRAND: <?php
            $sql1 = " SELECT * FROM `car` WHERE id='$h'";
            $r1 = mysqli_query($con, $sql1);
            $ro1 = mysqli_fetch_assoc($r1);
            $h1 = $ro1["title"] ;
            echo $h1;
            ?></span></li>
            <li class="list-group-hover list-group-item"><span class="caption">MODEL: <?php
            $sql1 = " SELECT * FROM `car` WHERE id='$h'";
            $r1 = mysqli_query($con, $sql1);
            $ro1 = mysqli_fetch_assoc($r1);
            $h1 = $ro1["model"] ;
            echo $h1;
            ?></span></li>
            <li class="list-group-hover list-group-item"><span class="caption">BODY: <?php
            $sql1 = " SELECT * FROM `car` WHERE id='$h'";
            $r1 = mysqli_query($con, $sql1);
            $ro1 = mysqli_fetch_assoc($r1);
            $h1 = $ro1["body"] ;
            echo $h1;
            ?></span></li>
            <li class="list-group-hover list-group-item"><span class="caption">ENG. TYPE: <?php
            $sql1 = " SELECT * FROM `car` WHERE id='$h'";
            $r1 = mysqli_query($con, $sql1);
            $ro1 = mysqli_fetch_assoc($r1);
            $h1 = $ro1["engType"] ;
            echo $h1;
            ?></span></li>

            <li class="list-group-hover list-group-item"><span class="caption">PRICE: $ <?php
            $sql1 = " SELECT * FROM `car` WHERE id='$h'";
            $r1 = mysqli_query($con, $sql1);
            $ro1 = mysqli_fetch_assoc($r1);
            $h1 = $ro1["price"] ;
            echo $h1;
            ?>.00</span></li>

            <li class="list-group-hover list-group-item"><span class="caption">MFG. YEAR: <?php
            $sql1 = " SELECT * FROM `car` WHERE id='$h'";
            $r1 = mysqli_query($con, $sql1);
            $ro1 = mysqli_fetch_assoc($r1);
            $h1 = $ro1["year"] ;
            echo $h1;
            ?></span></li>

          </ul>

      <?php
        }
      }




    ?>


    </div>

  </div>
</div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
