let updatePersonForm = document.getElementById('update-organizer-form');

updatePersonForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let inputFullName    = document.getElementById("organizer-select-name");
    let inputCompanyName = document.getElementById("input-company-update");
    let inputEmail       = document.getElementById("update-email");

    console.log(inputEmail)

    let fullNameValue    = inputFullName.value;
    let companyNameValue = inputCompanyName.value;
    let emailValue       = inputEmail.value;

    console.log(fullNameValue, companyNameValue, emailValue)

    let data = {
        fullname: fullNameValue,
        company: companyNameValue,
        email: emailValue
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/put-organizer", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            updateRow([companyNameValue, emailValue], fullNameValue);

        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
});

function updateRow(data, organizerID){

    let company = data[0]
    let email = data[1]

    let table = document.getElementById("organizer-table");

    for (let i = 0, row; row = table.rows[i]; i++) {

       if (table.rows[i].getAttribute("data-value") == organizerID) {

            let updateRowIndex = table.getElementsByTagName("tr")[i];

            let td_company = updateRowIndex.getElementsByTagName("td")[3];
            let td_email   = updateRowIndex.getElementsByTagName("td")[4];
            
            td_company.innerHTML = company;
            td_email.innerHTML   = email; 
       }
    }
}