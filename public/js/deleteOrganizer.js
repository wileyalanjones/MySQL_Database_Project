/**{{!
  🔔 Citation for the following code:
  ---- Date: 3/10/2025
  ---- Adapted from Node.js Exploration: https://canvas.oregonstate.edu/courses/1987790/pages/exploration-developing-in-node-dot-js?module_item_id=25023025
  ---- Adapted from nodejs-starter-app: https://github.com/osu-cs340-ecampus/nodejs-starter-app
  }}*/

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
            deleteDropDownMenu(organizerID)
            break; 
        }
    }
}

function deleteDropDownMenu(organizerID){
  let selectMenu = document.getElementById("organizer-select-name");
  for (let i = 0; i < selectMenu.length; i++){
    if (Number(selectMenu.options[i].value) === Number(organizerID)){
      selectMenu[i].remove();
      break;
    } 

  }
}