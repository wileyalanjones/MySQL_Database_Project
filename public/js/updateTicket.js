let updateTicketForm = document.getElementById('update-ticket-form')

updateTicketForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let inputTicketBuyerEvent = document.getElementById("update-fullname-and-concert")
    let inputParking          = document.getElementById("update-parking")
    
    let ticketsSoldID   = inputTicketBuyerEvent.value;
    let parkingIncluded = inputParking.value;

    let data = {
        id: ticketsSoldID,
        parking: parkingIncluded
    }

    let xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/put-ticket", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            updateRow(parkingIncluded, ticketsSoldID);
        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an errror with the input")
        }
    }
    xhttp.send(JSON.stringify(data));
})

function updateRow(data, id) {
    
    console.log(id, data)

    let table = document.getElementById("ticket-table");

    for (let i, row; row = table.rows[i]; i++) {
        
        if (table.rows[i].getAttribute("data-value") == id) {
            
            let updateRowIndex   = table.getElementsByTagName("tr")[i]
            let td_parking       = updateRowIndex.getElementByTagName("td")[4];
            td_parking.innerHTML = data
        }
    }
}