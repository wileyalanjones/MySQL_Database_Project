let updatePersonForm = document.getElementById('update-event-form');

updatePersonForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //let inputEventID = document.getElementById("input-event-id");
    let inputEventIDName = document.getElementById("update-event-id-and-name");
    let inputEventDate    = document.getElementById("update-event-date");
    //let inputEventType    = document.getElementById("input-event-type");
    let inputOrganizerID  = document.getElementById("input-event-organizerid");

    //console.log(inputEventName, inputEventDate, inputEventType, inputOrganizerID);

    let eventIDNameValue     = inputEventIDName.value;
    //let eventNameValue    = inputEventName.value;
    let eventDateValue    = inputEventDate.value;
    //let eventTypeValue    = inputEventType.value;
    let organizerIDValue  = inputOrganizerID.value || null;

    //let organizerIDValue = inputEventIDName.options[inputEventIDName.selectedIndex].getAttribute('data-organizerid');
    //inputOrganizerID.value = organizerIDValue;
    
    //console.log(eventIDNameValue, eventDateValue, organizerIDValue);

    let data = {
        eventID: eventIDNameValue,
        //eventName: eventNameValue,
        eventDate: eventDateValue,
        //eventType: eventTypeValue,
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
            updateEventRow(eventDateValue, eventIDNameValue);

        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the update.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
});

function updateEventRow(data, eventID) {
    //let eventDate = data[1];

    let table = document.getElementById("event-table");

    for (let i = 0, row; row = table.rows[i]; i++) {
        if (table.rows[i].getAttribute("data-value") == eventID) {
            let updateRowIndex = table.getElementsByTagName("tr")[i];

            let td_eventDate   = updateRowIndex.getElementsByTagName("td")[3];

            td_eventDate.innerHTML = eventDate;
        }
    }
}