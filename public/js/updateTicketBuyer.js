/**{{!
  🔔 Citation for the following code:
  ---- Date: 3/10/2025
  ---- Adapted from Node.js Exploration: https://canvas.oregonstate.edu/courses/1987790/pages/exploration-developing-in-node-dot-js?module_item_id=25023025
  ---- Adapted from nodejs-starter-app: https://github.com/osu-cs340-ecampus/nodejs-starter-app
  }}*/

let updatePersonForm = document.getElementById('update-ticket-buyer');

updatePersonForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let inputTicketBuyerID  = document.getElementById("ticket-buyer-select-name");
    let inputEmail          = document.getElementById("update-email");
    let inputAddress        = document.getElementById("update-address");

    let ticketBuyerIDValue  = inputTicketBuyerID.value;
    let emailValue          = inputEmail.value;
    let addressValue        = inputAddress.value;

    let data = {
        ticketBuyerID: ticketBuyerIDValue,
        email: emailValue,
        address: addressValue
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/put-ticketBuyer", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            updateRow([emailValue, addressValue], ticketBuyerIDValue);

        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
});

function updateRow(data, ticketBuyerID){

    let email = data[0];
    let address = data[1];

    let table = document.getElementById("ticketBuyer-table");

    for (let i = 0, row; row = table.rows[i]; i++) {

       if (table.rows[i].getAttribute("data-value") == ticketBuyerID) {

            let updateRowIndex = table.getElementsByTagName("tr")[i];

            let td_email     = updateRowIndex.getElementsByTagName("td")[3]; 
            let td_address   = updateRowIndex.getElementsByTagName("td")[4];

            td_email.innerHTML     = email;
            td_address.innerHTML   = address;
       }
    }
}