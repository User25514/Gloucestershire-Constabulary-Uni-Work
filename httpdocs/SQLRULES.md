{
CREATE TABLE `tbl_public_user` (
    `User_ID` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `Cred_ID` BIGINT NOT NULL,
    `Email` varchar(50) NOT NULL,
    `First_Name` varchar(20) NOT NULL,
    `Last_Name` varchar(20) NOT NULL,
    `DOB` DATE NOT NULL,
    `Phone_Number` varchar(11) NOT NULL,
    FOREIGN KEY (Cred_ID) REFERENCES tbl_public_cred(Cred_ID)
    ) ENGINE=InnoDB;

}
{
CREATE TABLE `tbl_public_cred` (
    `Cred_ID` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `Password` varchar(200) NOT NULL,
    `Priority` BIT NOT NULL,
    FOREIGN KEY (User_ID) REFERENCES tbl_public_user(User_ID)
    ) ENGINE=InnoDB;
}
{
CREATE TABLE `tbl_public_bike` (
    `Bike_ID` BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `User_ID` BIGINT NOT NULL,
    `MPN` varchar(20),
    `Brand` varchar(20) NOT NULL,
    `Model` varchar(20),
    `Type` varchar(20) NOT NULL,
    `Wheel_Size` INT,
    `Colour` varchar(20) NOT NULL,
    `Number_of_Gears` INT,
    `Brake_Type` varchar(20),
    `Suspension` varchar(20),
    `Gender` varchar(20) NOT NULL,
    `Age_Group` varchar(20) NOT NULL,
    `Date_of_Event` DATE,
    `LAT` varchar(20),
    `LNG` varchar(20),
    `Images` LONGBLOB NOT NULL,
    FOREIGN KEY (User_ID) REFERENCES tbl_public_user(User_ID)
    ) ENGINE=InnoDB;
}

{
CREATE TABLE `tbl_private_bikecases` (
    `Case_ID` BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `Bike_ID` BIGINT NOT NULL,
    `Last_Updated` DATE NOT NULL,
    `Status` varchar(20) NOT NULL,
    `Message` varchar(50) NOT NULL
    FOREIGN KEY (Bike_ID) REFERENCES tbl_bike(Bike_ID)
    ) ENGINE=InnoDB;
