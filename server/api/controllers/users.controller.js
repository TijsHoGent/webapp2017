const mongoose = require("mongoose");
const User = mongoose.model('User');
const passport = require('passport');

const userService = require('../services/user.service');

module.exports.signin = function(req, res) {
  userService.signin(req.body.username, req.body.password)
  .then(function(user) {
    console.log(user);
    if (user) {
      // authentication successful
      res.send(user);
  } else {
      // authentication failed
      res.status(400).send('Username or password is incorrect');
  }
})
.catch(function (err) {
  res.status(400).send(err);
  });
}

module.exports.signup = function(req, res) {
  userService.create(req.body)
    .then(function() {
      console.log(req.json());
      res.sendStatus(200).json(req);
    })
    .catch(function(err){
      res.status(400).send(err);
    })
}
