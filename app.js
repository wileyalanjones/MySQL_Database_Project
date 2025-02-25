// App.js

/*
    SETUP
    Based on cs340 Starter Code
*/
var express = require('express');   // We are using the express library for the web server
var app     = express();            // We need to instantiate an express object to interact with the server in our code
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
PORT        = 8239;                 // Set a port number at the top so it's easy to change in the future

const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                 // Tell express to use the handlebars engine whenever it encounters a *.hbs file.


// Database
var db = require('./database/db-connector')

/*
    ROUTES
*/
app.get('/', function(req, res)
    {
        res.render('index')
    })

app.get('/events', function(req, res)
    {
        let query1 = "SELECT * FROM Events";
        db.pool.query(query1, function(error, rows, fields){
            res.render('events', {data: rows});
        })
    });

app.get('/organizers', function(req, res)
    {
        let query1 = "SELECT * FROM Organizers";
        db.pool.query(query1, function(error, rows, fields){
            res.render('organizers', {data: rows});
        })
    });

app.post('/addOrganizer', function(req, res) {
    // Collect the incoming data
    let data = req.body
    
    const organizer = {
        firstname: data['input-organizer-firstname'],
        lastname: data['input-organizer-lastname'],
        company: data['input-companyname'],
        email: data['input-organizer-email']
    }

    query1 = `INSERT INTO Organizers (firstName, lastName, companyName, email)
            VALUES ('${organizer.firstname}', '${organizer.lastname}', '${organizer.company}','${organizer.email}')`;
    db.pool.query(query1, function(error, rows, fields) {
        if (error){
            console.log(error)
            res.sendStatus(400);
        }
        else {
            res.redirect('/organizers')
        }
    })        

})

app.delete('/delete-person', (req, res, next) => {
    let data = req.body
    let id = parseInt(data.id)
    let deleteOrg = `DELETE FROM Organizers WHERE organizerID = ?`

    db.pool.query(deleteOrg, [id], (error, rows, fields) => {
        if (error) {
            console.log(error)
            res.sendStatus(400)
        }
        else {
            redirect('/organizers')
        }
    })
})

app.get('/ticketbuyers', function(req, res)
    {
        let query1 = "SELECT * FROM TicketBuyers";
        db.pool.query(query1, function(error, rows, fields){
            res.render('ticketbuyers', {data: rows});
        })
    })

app.get('/ticketssold', function(req, res)
    {
        let query1 = "SELECT * FROM TicketsSold";
        db.pool.query(query1, function(error, rows, fields){
            res.render('ticketssold', {data: rows});
        })
    })

/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});