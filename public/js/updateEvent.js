let updatePersonForm = document.getElementById('update-event-form');

updateEventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputEventName    = document.getElementById("input-event-name");
    let inputEventDate    = document.getElementById("input-event-date");
    let inputEventType    = document.getElementById("input-event-type");
    let inputPercentFull  = document.getElementById("input-event-percentfull");
    let inputOrganizerID  = document.getElementById("input-event-organizerid");

    console.log(inputEventName, inputEventDate, inputEventType, inputPercentFull, inputOrganizerID);

    let eventNameValue    = inputEventName.value;
    let eventDateValue    = inputEventDate.value;
    let eventTypeValue    = inputEventType.value;
    let percentFullValue  = inputPercentFull.value;
    let organizerIDValue  = inputOrganizerID.value;

    console.log(eventNameValue, eventDateValue, eventTypeValue, percentFullValue, organizerIDValue);

    let data = {
        eventName: eventNameValue,
        eventDate: eventDateValue,
        eventType: eventTypeValue,
        percentFull: percentFullValue,
        organizerID: organizerIDValue
    };

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/update-event", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            updateEventRow([eventNameValue, eventDateValue, eventTypeValue, percentFullValue, organizerIDValue], data.eventID);

        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the update.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
});

function updateEventRow(data, eventID) {
    let eventName = data[0];
    let eventDate = data[1];
    let eventType = data[2];
    let percentFull = data[3];
    let organizerID = data[4];

    let table = document.getElementById("event-table");

    for (let i = 0, row; row = table.rows[i]; i++) {
        if (table.rows[i].getAttribute("data-value") == eventID) {
            let updateRowIndex = table.getElementsByTagName("tr")[i];

            let td_eventName   = updateRowIndex.getElementsByTagName("td")[2];
            let td_eventDate   = updateRowIndex.getElementsByTagName("td")[3];
            let td_eventType   = updateRowIndex.getElementsByTagName("td")[4];
            let td_percentFull = updateRowIndex.getElementsByTagName("td")[5];
            let td_organizerID = updateRowIndex.getElementsByTagName("td")[6];

            td_eventName.innerHTML   = eventName;
            td_eventDate.innerHTML   = eventDate;
            td_eventType.innerHTML   = eventType;
            td_percentFull.innerHTML = percentFull;
            td_organizerID.innerHTML = organizerID;
        }
    }
}