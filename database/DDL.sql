-- Fairview Palladium Event Space Management System
-- Group 31
-- Delia Dao, Wiley Jones
-- ------------------------------------------------------
--
-- Create Table Organizers
--

DROP TABLE IF EXISTS `Organizers`;
CREATE TABLE `Organizers` (
  `organizerID` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `companyName` varchar(50) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`organizerID`)
);

--
-- Inserting example date into table Organizers
--

LOCK TABLES `Organizers` WRITE;
INSERT INTO `Organizers` 
VALUES (1,'Michael','Rapino','Live Nation','fakeemail@livenation.com'),
(2,'Paul','Tollett','Goldenvoice','notarealemail@gv.com'),
(3,'Kim','Noltemy','Fairview Philharmonic','mailerdaemenincoming@fp.com');
UNLOCK TABLES;
--
-- Create Table Events
--
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `Events`;
CREATE TABLE `Events` (
  `eventID` int(11) NOT NULL AUTO_INCREMENT,
  `eventName` varchar(255) NOT NULL,
  `eventDate` date NOT NULL,
  `eventType` varchar(255) NOT NULL,
  `organizerID` int(11) DEFAULT NULL,
  PRIMARY KEY (`eventID`),
  KEY `organizerID_idx` (`organizerID`),
  CONSTRAINT `fk_event_organizer` FOREIGN KEY (`organizerID`) REFERENCES `Organizers` (`organizerID`) 
  ON DELETE NO ACTION 
  ON UPDATE CASCADE
);

--
-- Inserting example date into table Events
--

LOCK TABLES `Events` WRITE;
INSERT INTO `Events` 
VALUES (1,'Fairchella','2025-02-01','Concert',2),
(2,'Beethoven''s 9th','2025-02-04','Concert',3),
(3,'Shane Gillis','2025-02-02','Stand Up',1),
(4,'Two Door Cinema Club','2025-02-03','Concert',1);
UNLOCK TABLES;

--
-- Create Table TicketBuyers
--

DROP TABLE IF EXISTS `TicketBuyers`;
CREATE TABLE `TicketBuyers` (
  `ticketBuyerID` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`ticketBuyerID`),
  UNIQUE KEY `email_UNIQUE` (`email`)
);

--
-- Inserting example date into table TicketBuyers
--

LOCK TABLES `TicketBuyers` WRITE;
INSERT INTO `TicketBuyers` 
VALUES (1,'John','Doe','johndoe@fakeemail.com','123 Main Street'),
(2,'Jane','Doe','janedoe@fakeemail.com','4000 Elm Ave '),
(3,'Tom','Sawyer','tomsawyer@notreal.com','501 Oak Place'),
(4,'Rob','Jones','robj@notreal.com','616 Gray Ave');
UNLOCK TABLES;

--
-- Create Table TicketsSold
--
DROP TABLE IF EXISTS `TicketsSold`;

CREATE TABLE `TicketsSold` (
  `ticketsSoldID` int(11) NOT NULL AUTO_INCREMENT,
  `price` decimal(10,2) NOT NULL,
  `seat` tinyint(2) NOT NULL,
  `section` tinyint(3) NOT NULL,
  `parkingIncluded` tinyint(1) NOT NULL DEFAULT 0,
  `eventID` int(11) NOT NULL,
  `ticketBuyerID` int(11) NOT NULL,
  PRIMARY KEY (`ticketsSoldID`),
  KEY `ticketBuyerID_idx` (`ticketBuyerID`),
  KEY `eventID_idx` (`eventID`),
  CONSTRAINT `eventID` FOREIGN KEY (`eventID`) REFERENCES `Events` (`eventID`) 
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ticketBuyerID` FOREIGN KEY (`ticketBuyerID`) REFERENCES `TicketBuyers` (`ticketBuyerID`)
  ON DELETE NO ACTION ON UPDATE NO ACTION
);

--
-- Inserting example date into table TicketsSold
--

LOCK TABLES `TicketsSold` WRITE;
INSERT INTO `TicketsSold` 
VALUES (1,100.00,1,100,0,1,1),
(2,100.00,2,100,0,1,1),
(3,50.00,5,127,1,2,4),
(4,50.00,12,127,0,3,2),
(5,150.00,1,100,0,4,3);
UNLOCK TABLES;

SET FOREIGN_KEY_CHECKS = 1;