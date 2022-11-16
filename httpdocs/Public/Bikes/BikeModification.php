<?php
    if($_POST['phpFunction'] == 'Register')
        Register();
    else if($_POST['phpFunction'] == 'Lookup')
        Lookup();
    else if($_POST['phpFunction'] == 'RegisterStolen')
        RegisterStolen();
    function Register() {
        include "config.php";
        //Grab everything from POST request
        $MPN = $_POST['MPN'];
        $Brand = $_POST['Brand'];
        $Model = $_POST['Model'];
        $Type = $_POST['Type'];
        $WheelSize = $_POST['WheelSize'];
        $Colour = $_POST['Colour'];
        $NumOGears = $_POST['NumberofGears'];
        $BrakeType = $_POST['brakeType'];
        $Suspension = $_POST['Suspension'];
        $Gender = $_POST['Gender'];
        $AgeGroup = $_POST['AgeGroup'];
        $dateEvent = $_POST['dateEvent'];
        $LAT = $_POST['eventLat'];
        $LNG = $_POST['eventLng'];
        $User_ID = $_POST['uID'];
        $IMG = $_POST['Binary'];
        // If User_ID is null then their is no duplicate MPN.
        $sql = "SELECT User_ID FROM `tbl_public_bike` WHERE MPN='$MPN'";
        $res = mysqli_query($connection, $sql);
        $row = mysqli_fetch_assoc($res);
        if ($row['User_ID'] == null) {
            //Input all POST data into database         
            $sql = "INSERT INTO `tbl_public_bike` (User_ID,MPN,Brand,Model,Type,Wheel_Size,Colour,Number_of_Gears,Brake_Type,Suspension,Gender,Age_Group,Date_of_event,LAT,LNG,Images) VALUES($User_ID,$MPN,'$Brand','$Model','$Type',$WheelSize,'$Colour',$NumOGears,'$BrakeType','$Suspension','$Gender','$AgeGroup','$dateEvent',$LAT,$LNG,'$IMG')";
            if(mysqli_query($connection,$sql)) {
                echo '{"result":"Registered"}';
                return;
            } else {
                echo mysqli_error($connection);
                echo '{"result":"Error with a variable on the form"}';
                return;
            }}else {
                echo mysqli_error($connection);
                echo '{"result":"MPN already exists"}';
                return;
            }
        mysqli_close($connection);
    }   
    function Lookup(){
        include "config.php";
        $testdata = "set global net_buffer_length=1000000; set global max_allowed_packet=1000000000;";
        $res = mysqli_query($connection, $testdata);
        $User_ID = intval($_POST['User_ID']);
        $sql = "SELECT * FROM tbl_public_bike WHERE User_ID=$User_ID" ;
        $query = mysqli_query($connection, $sql);

        $json = mysqli_fetch_all ($query, MYSQLI_ASSOC);
        echo json_encode($json );
       
        }
    function RegisterStolen() {
        include "config.php";
        $Bike_ID = intval($_POST['Bike_ID'])+1;
        $dateEvent = $_POST['dateEvent'];
        $LAT = $_POST['eventLat'];
        $LNG = $_POST['eventLng'];
        $sql = "UPDATE tbl_public_bike SET Date_of_Event='$dateEvent',LAT=$LAT,LNG=$LNG WHERE Bike_ID=$Bike_ID;";
        if(mysqli_query($connection,$sql)) {
            echo '{"result":"success"}';

        } else {
            echo '{"result":"failed"}';
        }
        }   
    ?>
