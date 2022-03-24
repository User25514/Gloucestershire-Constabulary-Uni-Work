{
CREATE TABLE `tbl_user` (
    `User_ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `First_Name` varchar(20) NOT NULL,
    `Last_Name` varchar(20) NOT NULL,
    `DOB` DATE NOT NULL,
    `Phone_Number` TINYINT(10) NOT NULL,
    `Email` varchar(50) NOT NULL,
    `Password` varchar(200) NOT NULL
    ) ENGINE=InnoDB;
}