<?php
    $servername = "localhost";
    $username = "s4106736FlogUser";
    $password = "cD45ln1^";
    $dbname = "s4106736_DBFlogger";
    $connection = new mysqli($servername,$username,$password,$dbname);
    if($connection->connect_error) {
        echo $connection->connect_error;
    }
?>