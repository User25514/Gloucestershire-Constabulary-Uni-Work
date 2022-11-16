<?php
	/* Database credentials*/
    $servername = "localhost";
    $username = "s4106736_week9";
    $password = "%3j58xXa";
    $dbname = "s4106736_week9";
	$connection=new mysqli($servername,$username,$password,$dbname);
	if($connection->connect_error){
		echo $connection->connect_error;
	}
	echo "connected";
?>