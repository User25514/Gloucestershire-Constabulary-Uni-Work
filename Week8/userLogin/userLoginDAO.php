<?php
if(isset($_POST['phpFunction'])) {
    if ($_POST['phpFunction'] == 'login') {
        login();
    }
}
function login() {
    session_start();
    $uName = $_POST['userName'];
    $pWord = $_POST['password'];
    $mCode = $_post['moduleCode'];
    $sql = "SELECT `First_Name`,`Last_Name` FROM `tbl_user` WHERE Email='$uName' AND Password='$pWord' AND IsVerified=1";
    include "./config.php";
    $res = mysqli_query($connection, $sql);
    $num_row = mysqli_num_rows($res);
    $row=mysqli_fetch_assoc($res);
    if ($num_row == 1) {
        echo json_encode($row);
        $_SESSION['uName'] = $uName;
    }
    else {
        echo '{"result":"false"}';
    }
}
?>