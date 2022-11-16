<?php
    echo "Connecting";
    $servername = "localhost";
    $username = "GloCon";
    $password = "cD45ln1^";
    $dbname = "Gloucestershire-Constabulary";
    $connection = new mysqli($servername,$username,$password,$dbname);
    if($connection->connect_error) {
        echo $connection->connect_error;
    }
?>