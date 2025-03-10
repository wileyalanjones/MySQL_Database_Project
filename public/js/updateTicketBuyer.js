let updatePersonForm = document.getElementById('updateTicketBuyer');

updatePersonForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let inputTicketBuyerID  = document.getElementById("ticketbuyer-select-name");
    let inputFirstName      = document.getElementById("input-firstname-update");
    let inputLastName       = document.getElementById("input-lastname-update");
    let inputEmail          = document.getElementById("update-email");
    let inputAddress        = document.getElementById("input-address-update");

    console.log(inputEmail)

    let ticketBuyerIDValue  = inputTicketBuyerID.value;
    let firstNameValue      = inputFirstName.value;
    let lastNameValue       = inputLastName.value;
    let emailValue          = inputEmail.value;
    let addressValue        = inputAddress.value;

    console.log(ticketBuyerIDValue, firstNameValue, lastNameValue, emailValue, addressValue);

    let data = {
        ticketBuyerID: ticketBuyerIDValue,
        firstname: firstNameValue,
        lastname: lastNameValue,
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
            updateRow([firstNameValue, lastNameValue, emailValue, addressValue], ticketBuyerIDValue);

        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
});

function updateRow(data, ticketBuyerID){

    let firstName = data[0];
    let lastName = data[1];
    let email = data[2];
    let address = data[3];

    let table = document.getElementById("ticketBuyer-table");

    for (let i = 0, row; row = table.rows[i]; i++) {

       if (table.rows[i].getAttribute("data-value") == ticketBuyerID) {

            let updateRowIndex = table.getElementsByTagName("tr")[i];

            let td_firstName = updateRowIndex.getElementsByTagName("td")[3];
            let td_lastName  = updateRowIndex.getElementsByTagName("td")[4]; 
            let td_email     = updateRowIndex.getElementsByTagName("td")[5]; 
            let td_address   = updateRowIndex.getElementsByTagName("td")[6];

            td_firstName.innerHTML = firstName;
            td_lastName.innerHTML  = lastName;
            td_email.innerHTML     = email;
            td_address.innerHTML   = address;
       }
    }
}