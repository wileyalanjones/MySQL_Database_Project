-- Fairview Palladium Event Space Management System
-- Group 31
-- Delia Dao, Wiley Jones
-- ------------------------------------------------------

-- -------------------------------------------
-- queries for Events Page
-- -------------------------------------------

-- get all information for all Events
SELECT eventID, eventName, eventDate, eventType
    FROM Events;

-- add a new Event
INSERT INTO Events (eventName,eventDate,eventType)
VALUES (:eventNameInput,:eventDateInput, :eventTypeinput);

--update an Event 
UPDATE Events
SET eventName = :eventNameInput, 
    eventDate = :eventDateInput, 
WHERE eventID = :eventIDInput;

--delete an Event
DELETE FROM Events
WHERE eventID = :eventIDInput;

--set/remove an Organizer for an Event (nullable relationship)
UPDATE Events
SET organizerID = :organizerIDInput
WHERE eventID = :eventIDInput;

-- -------------------------------------------
-- queries for Organizers Page
-- -------------------------------------------

-- get all information for all Organizers
SELECT * FROM Organizers;

--add a new Organizer
INSERT INTO Organizers (firstName, lastName, companyName, email)
VALUES (:firstNameInput, :lastNameInput, :companyNameInput, :emailInput);

-- update an existing Organizer
UPDATE Organizers
SET firstName = :firstNameInput,
    lastName = :lastNameInput,
    companyName = :companyNameInput,
    email = :emailInput
WHERE organizerID = :organizerIDInput;

-- delete an existing Organizer
DELETE FROM Organizers
WHERE organizerID = :organizerIDInput;


-- -------------------------------------------
-- queries for TicketBuyers Page
-- -------------------------------------------

-- get all information for all TicketBuyers
SELECT * FROM TicketBuyers;

-- add a new TicketBuyer
INSERT INTO TicketBuyers (firstName, lastName, email, address)
VALUES (:firstNameInput, :lastNameInput, :emailInput, :addressInput);

-- delete a TicketBuyer
DELETE FROM TicketBuyers
WHERE ticketBuyerID = :ticketBuyerIDInput;

-- -------------------------------------------
-- queries for TicketsSold Page
-- -------------------------------------------

-- get all information for all TicketsSold
SELECT * FROM TicketsSold;

-- add a new TicketSold
INSERT INTO TicketsSold (ticketBuyerID, eventID, price, seat, section, parkingIncluded)
VALUES (:ticketBuyerIDInput, :eventIDInput, :priceInput, :seatInput, :sectionInput, :parkingIncludedInput);

--delete a TicketSold
DELETE FROM TicketsSold
WHERE eventTicketID = :eventTicketIDInput;

--dynamic drop-down for TicketsSold
SELECT DISTINCT section
FROM TicketsSold
WHERE eventID = :eventIDInput
ORDER BY section;

--update intersection table
UPDATE TicketsSold
SET parkingIncluded = :parkingIncludedInput
WHERE eventTicketID = :eventTicketIDInput;




