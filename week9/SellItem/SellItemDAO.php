<?php
$itemName=$_POST['itemName'];
$itemDescription=$_POST['itemDescription'];
$itemPrice=$_POST['itemPrice'];
include '../include/config.php';
//echo 'Hello';
//echo $_POST['itemName'];
$upload_folder="../ItemImages/";
$sql="Insert into tblItem (ItemName, ItemDescription, Price) values ('$itemName','$itemDescription', '$itemPrice')";
//echo $sql;
$imageID=1;
if(!mysqli_query($connection,$sql)){
	echo 'False1';
}
$insertedItemID=mysqli_insert_id($connection);
foreach ($_FILES['images']['name'] as $key=>$file_name){
	$tmp_name=$_FILES['images']['tmp_name'][$key];
	$ext=end(explode(".", $file_name));
	$imageID=$insertedItemID."_".$key.".". $ext;
	$sql="insert into tblItemImages (itemID, imageID) VALUES ('$insertedItemID', '$imageID')";
	if(!mysqli_query($connection, $sql)){
		echo 'False2';
	}
	move_uploaded_file($tmp_name, $upload_folder.$imageID);
}

?>