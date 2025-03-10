function deleteTicketBuyer(ticketBuyerID) {
    let link = '/delete-ticket-buyer/';
    let data = {
      id: ticketBuyerID
    };
  
    $.ajax({
      url: link,
      type: 'DELETE',
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      success: function(result) {
        deleteRow(ticketBuyerID);
      },
      //Error message to help test
      error: function(xhr, status, error) {
        alert('Error: Could not delete ticket buyer. Please try again later.');
        console.log(error);
    }
    });
  }

function deleteRow(ticketBuyerID){
    let table = document.getElementById("ticketBuyer-table");
    for (let i = 0, row; row =table.rows[i]; i++) {
        if (table.rows[i].getAttribute('data-value') == ticketBuyerID) {
            table.deleteRow(i);
            deleteDropDownMenu(ticketBuyerID);
            break; 
        }
    }
}

function deleteDropDownMenu(ticketBuyerID){
  let selectMenu = document.getElementById("ticketBuyer-select-name");
  for (let i = 0; i < selectMenu.length; i++){
    if (Number(selectMenu.options[i].value) === Number(ticketBuyerID)){
      selectMenu[i].remove();
      break;
    } 

  }
}