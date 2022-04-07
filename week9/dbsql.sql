
CREATE TABLE `tblItem`(
	`ItemID` int(11) NOT NULL,
    `ItemName` varchar(30) NOT NULL,
    `ItemDescription` varchar(20) NOT NULL,
    `Price` varchar(20) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=latin1;
CREATE TABLE `tblItemImages`(
	`ItemID` int(11) NOT NULL,
    `ImageID` varchar(20) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=latin1;
ALTER TABLE `tblItem`
	ADD PRIMARY KEY (`ItemID`);
ALTER TABLE `tblItem` 
	MODIFY `itemID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;
ALTER TABLE `tblItemImages`
	ADD FOREIGN KEY (itemID) REFERENCES tblItem(itemID);
