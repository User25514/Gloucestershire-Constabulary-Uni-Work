<?php
    function write_to_console($data) {
        $console = $data;
        if (is_array($console))
            $console = implode(',', $console);

        echo "<script>console.log('Console: " . $console . "' );</script>";
    }
    write_to_console("Start Function Config - PHP");
    $servername = "localhost";
    $username = "s4106736_week8";
    $password = "%3j58xXa";
    $dbname = "s4106736_week8";
    $connection = new mysqli($servername,$username,$password,$dbname);
    write_to_console("DOne Config- PHP");
    if($connection->connect_error) {
        echo $connection->connect_error;
    }
?>