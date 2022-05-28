<?php
    echo "Start";
    if($_POST['phpFunction'] == 'create')
        echo "Lets Go";
        create();
        
    else if ($_POST['phpFunction'] == 'retrieve')
        retrieve();
    else if ($_POST['phpFunction'] == 'update')
        update();
    else if ($_POST['phpFunction'] == 'delete')
        delete();
    function create() {
        echo "Start Function";
        $firstname = $_POST['firstName'];
        $lastname = $_POST['lastName'];
        $dob = $_POST['dateofbirth'];
        $phonenumber = $_POST['phonenumber'];
        $email = $_POST['email'];
        $pass = $_POST['password'];
        echo "Done Variables";
        include "config.php";
        $sql = "INSERT INTO `tbl_user`"." values "."('$firstname','$lastname','$dob','$phonenumber','$email','$pass')";
        if(mysqli_query($connection,$sql)) {
            echo "Successfully Registered.";
        } else {
            echo mysqli_error($connection);
            return;
        }
        mysqli_close($connection);
    }    
    
?>