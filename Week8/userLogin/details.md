s4106736_week8
%3j58xXa
{
CREATE TABLE `tbl_user` (
    `First_Name` varchar(20) NOT NULL,
    `Last_Name` varchar(20) NOT NULL,
    `Email` varchar(50) NOT NULL PRIMARY KEY,
    `Password` varchar(18) NOT NULL,
    `IsVerified` TINYINT(1) NOT NULL
    ) ENGINE=InnoDB;
}