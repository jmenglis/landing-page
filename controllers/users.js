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
    if (err) {
    res.render('alreadyregistered', { title: 'email already registered', user: params })
    } else {
    console.log('Subscribed Successfully');
     res.render('registered', { title: 'welcome to the cubers', user: params });
    }
  });
});

module.exports = controller;
