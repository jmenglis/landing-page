// Require our dependencies
// ------------------------
require('dotenv').config();

var express = require('express'),
    exphbs  = require('express-handlebars'),
    bodyParser = require('body-parser'),
    app     = express();

// database
// require('./db/database');

// controllers

var controllers = require('./controllers/users')

// Configure settings
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.engine('hbs', exphbs({
  defaultLayout: 'default',
  extname:       '.hbs'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs'); // matching the engine

// Global Variables
app.locals.companyName = 'redothecube';

// Setting Route

app.use('/', controllers);


// Start a server
// --------------
var server = app.listen(3000, function() {
  console.log('The server is up and running on port ' + server.address().port + '.');
});
