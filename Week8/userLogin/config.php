<?php
    $servername = "localhost";
    $username = "s4106736_week8";
    $password = "%3j58xXa";
    $dbname = "s4106736_week8";
    $connection = new mysqli($servername,$username,$password,$dbname);
    if($connection->connect_error) {
        echo $connection->connect_error;
    }
?>