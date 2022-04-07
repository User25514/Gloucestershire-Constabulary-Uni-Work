<?php
echo "trouble";
if(isset($_POST['phpFunction'])) {
    echo "ok";
    if($_POST['phpFunction'] == 'getItemList') {
        echo "get item";
        getItemList();
    } elseif($_POST['phpFunction'] == 'getItemImages') {
        getItemImages();
    }
}
function getItemList() {
    include "../include/config.php";
    echo "ok1";
    $sql = "SELECT * FROM tblItem";
    $res = mysqli_query($connection,$sql);
    echo "ok2";
    while($row = mysqli_fetch_array($res)) {
        $json[] = $row;
    }
    echo json_encode($json);
}
function getItemImages() {
    include "../include/config.php";
    $itemID = $_POST['itemID'];
    $sql = "SELECT * FROM tblItemImages where ItemID='$itemID'";
    $res = mysqli_query($connection, $sql);
    while($row = mysqli_fetch_array($res)) {
        $json[] = $row;
    }
    echo json_encode($json);
}
?>