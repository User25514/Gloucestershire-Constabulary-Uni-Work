
<?php

    if($_POST['phpFunction'] == 'Register')
        Register();
    else if ($_POST['phpFunction'] == 'Login')
        Login();

    function Register() {
        //connect to database
        include "config.php";
        //collect all data from the POST
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $dob = $_POST['dateofbirth'];
        $phonenumber = $_POST['phonenumber'];
        $email = $_POST['email'];
        //Hash Password to md5
        $pass = hash('md5', $_POST['password']);
        // check if email or phone number is already in tbl_public_user
        $sql = "SELECT * FROM `tbl_public_user` WHERE Email='$email' OR Phone_Number='$phonenumber'";
        $res = mysqli_query($connection, $sql);
        $row = mysqli_fetch_assoc($res);
        //if email or phonenumber doesnt exist, then continue with register
        if ($row['Email'] == null or $row['Phone_Number'] == null) {
            //Insert password and priority level into tbl_public_cred
            $sql = "INSERT INTO `tbl_public_cred` (Password,Priority) VALUES('$pass',0)";
            if(mysqli_query($connection,$sql)) {
                //grab cred ID to insert into tbl_public_user with the rest of the info.
                $Cred_ID = mysqli_insert_id($connection);
                $sql2 = "INSERT INTO `tbl_public_user`(Cred_ID,Email,First_Name,Last_Name,DOB,Phone_Number)VALUES('$Cred_ID','$email','$firstname','$lastname','$dob','$phonenumber')";
                if(mysqli_query($connection,$sql2)) {//On success. As the js file before hand had so much data validation.
                    echo mysqli_insert_id($connection);
                    } else {
                        echo mysqli_error($connection);
                        return;
                    }
            } else {
                echo mysqli_error($connection);
                return;
            }} else {
                echo '{"result":"false"}';
                return;
            }
        mysqli_close($connection);
    }    
    function Login() {
        session_start();
        //connect to database and collect all POST data
        include "config.php";
        $Email = $_POST['email'];
        //Hash password with MD5
        $pWord = hash('md5', $_POST['password']);
        $sql = "SELECT Cred_ID FROM `tbl_public_user` WHERE Email='$Email'";
        $res = mysqli_query($connection, $sql);
        $row=mysqli_fetch_assoc($res);
        if ($row['Cred_ID'] == null) {
            echo '{"result":"false"}';
            return;
        } else {
            $Cred_ID = $row['Cred_ID'];
            $sql2 = "SELECT Password,Priority FROM tbl_public_cred WHERE Cred_ID='$Cred_ID' AND Password='$pWord'";
            $res = mysqli_query($connection, $sql2);
            $row=mysqli_fetch_assoc($res);
            $Priority = $row['Priority'];
            if($row['Password'] == $pWord) {
                $sql3 = "SELECT User_ID,Email,First_Name,Last_Name,DOB,Phone_Number FROM `tbl_public_user` WHERE Email='$Email'";
                $res = mysqli_query($connection, $sql3);
                $row=mysqli_fetch_assoc($res);
                array_push($row,$Priority);
                echo json_encode($row);
                $_SESSION['uName'] = $User_ID;
            }else {
                echo '{"result":"false"}';
                return;
            }
        }


    }
    ?>
