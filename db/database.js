var mongoose = require('mongoose');

var connectionString = process.env.DB;
console.log('Attempt to connect to MongoDB');

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + process.env.DB);
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose error! ' + error);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected from: ' + process.env.DB);
});
