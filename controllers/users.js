var express = require('express');
var controller = express.Router();

var User = require('../models/User');

controller.get('/', function(req, res, next) {
  res.render('home', { title: 'take your work to the next level' });
})
.get('/users', function(req,res,next){
  User.find(function(err, users) {
    if (err) return next(err);
    res.json(users);
  });
})
.post('/', function(req,res,next) {
  new User({
    email: req.body.email,
    name: req.body.username
  }).save(function(err, users) {
    console.log(users);
    res.send("Hello I'm almost there");
  });
});

module.exports = controller;
