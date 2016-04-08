// Require our dependencies
// ------------------------
var express = require('express'),
    exphbs  = require('express-handlebars'),
    app     = express();

// Configure settings
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.engine('hbs', exphbs({
  defaultLayout: 'default',
  extname:       '.hbs'
}));

app.set('view engine', 'hbs'); // matching the engine

// Global Variables
app.locals.companyName = 'redothecube';

// Setting Route
app.get('/', function(req, res) {
  res.render('home', { title: 'take your work to the next level' });
});

// Start a server
// --------------
var server = app.listen(3000, function() {
  console.log('The server is up and running on port ' + server.address().port + '.');
});
