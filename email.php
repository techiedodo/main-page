<?php
session_start();

if(!$_SESSION["a"]){
  $a = rand(1,50);
  $b = rand(10,70);
  $_SESSION["a"] = $a;
  $_SESSION["b"] = $b;
}

$email = '';
$message = '';
$name = '';
$result = '';
$error = '';


 ?>
