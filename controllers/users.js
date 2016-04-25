var express = require('express');
var controller = express.Router();
var Sendy = require('sendy-api'),
    sendy = new Sendy('http://sendymail.hyzmqdx8rf.us-west-2.elasticbeanstalk.com/sendy/', process.env.APIKEY);

var User = require('../models/User');

controller.get('/', function(req, res, next) {
  res.render('home', { title: 'take your work to the next level' });
})
.post('/', function(req,res,next){
  var params = {
    email: req.body.email,
    name: req.body.username,
    list_id: 'GpswvjGyR1waosIDv892dL6w'
  }
  sendy.subscribe(params, function(err, result) {
    if (err) console.log(err.toString());
    console.log('Subscribed Successfully');
    res.send('You have successfully registered ' + params.email +'.');
  });
});

module.exports = controller;
