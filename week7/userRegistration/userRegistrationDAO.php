<?php
    if($_POST['phpFunction'] == 'create')
        create();
    else if ($_POST['phpFunction'] == 'retrieve')
        retrieve();
    else if ($_POST['phpFunction'] == 'update')
        update();
    else if ($_POST['phpFunction'] == 'delete')
        delete();
    function create() {
        $firstname = $_POST['firstName'];
        $lastname = $_POST['lastName'];
        $email = $_POST['email'];
        $pass = $_POST['password'];
        include "../include/config.php";
        $sql = "INSERT INTO `tbl_user`"." values "."('$firstname','$lastname','$email','$pass')";
        if(mysqli_query($connection,$sql)) {
            echo "Successfully Registered.";
        } else {
            echo mysqli_error($connection);
            return;
        }
        mysqli_close($connection);
    }    
    
?>