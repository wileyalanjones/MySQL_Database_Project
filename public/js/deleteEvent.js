function deleteEvent(eventID) {
    let link = '/delete-event/';
    let data = {
      id: eventID
    };
  
    $.ajax({
      url: link,
      type: 'DELETE',
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      success: function(result) {
        deleteRow(eventID);
      },
      //Error message to help test
      error: function(xhr, status, error) {
        alert('Error: Could not delete event. Please try again later.');
        console.log(error);
    }
    });
  }

function deleteRow(eventID){
    let table = document.getElementById("event-table");
    for (let i = 0, row; row =table.rows[i]; i++) {
        if (table.rows[i].getAttribute('data-value') == eventID) {
            table.deleteRow(i);
            deleteDropDownMenu(eventID)
            break; 
        }
    }
}

function deleteDropDownMenu(eventID){
  let selectMenu = document.getElementById("update-event-id-and-name");
  for (let i = 0; i < selectMenu.length; i++){
    if (Number(selectMenu.options[i].value) === Number(eventID)){
      selectMenu[i].remove();
      break;
    } 

  }
}