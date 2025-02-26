function deleteOrganizer(organizerID) {
    let link = '/delete-organizer/';
    let data = {
      id: organizerID
    };
  
    $.ajax({
      url: link,
      type: 'DELETE',
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      success: function(result) {
        deleteRow(organizerID);
      },
      //Error message to help test
      error: function(xhr, status, error) {
        alert('Error: Could not delete organizer. Please try again later.');
        console.log(error);
    }
    });
  }

function deleteRow(organizerID){
    let table = document.getElementById("organizer-table");
    for (let i = 0, row; row =table.rows[i]; i++) {
        if (table.rows[i].getAttribute('data-value') == organizerID) {
            table.deleteRow(i);
            break; 
        }
    }
}
