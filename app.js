// Require our dependencies
// ------------------------
require('dotenv').config();

var express = require('express'),
    bodyParser = require('body-parser'),
    app     = express();

// database
// require('./db/database');

// controllers

var controllers = require('./controllers/users')

// Configure settings
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Global Variables
app.locals.companyName = 'redothecube';

// Setting Route

app.use('/', controllers);


// Start a server
// --------------
var server = app.listen(3000, function() {
  console.log('The server is up and running on port ' + server.address().port + '.');
});
