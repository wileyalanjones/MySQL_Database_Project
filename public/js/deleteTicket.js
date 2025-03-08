function deleteTicket(ticketsSoldID) {
    let link = '/delete-ticket/';
    let data = {
        id: ticketsSoldID
    }

    $.ajax({
        url: link,
        type: 'DELETE',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function(result) {
            deleteRow(ticketsSoldID);
        },

        error: function(xhr, status, error) {
            alert('Error: Could not delete organizer. Please try again later.');
            console.log(error);
        }
    });
}

function deleteRow(ticketsSoldID){
    let table = document.getElementById('ticket-table');
    for (let i = 0, row; row = table.rows[i]; i++) {
        if (table.rows[i].getAttribute('data-value') == ticketsSoldID) {
            table.deleteRow(i);
            // deleteDropDownMenu(ticketID)
            break;
        }
    }
}
//
//fucntion deleteDropDownMenu(ticketID) {
//    let selectMenu = document.getElementById()
// }