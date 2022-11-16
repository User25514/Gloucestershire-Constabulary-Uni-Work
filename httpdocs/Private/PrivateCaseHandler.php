
<?php

    if($_POST['phpFunction'] == 'HeatMap')
        HeatMap();
    function HeatMap() {
        //connect to database
        include "config.php";
        $User_ID = intval($_POST['User_ID']);
        $sql = "SELECT LAT,LNG FROM tbl_public_bike WHERE LAT IS NOT NULL" ;
        $query = mysqli_query($connection, $sql);

        $json = mysqli_fetch_all ($query, MYSQLI_ASSOC);
        echo json_encode($json );
           
            
    }    
?>
