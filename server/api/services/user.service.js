var config = require('../../config/config.json');
var bcrypt = require('bcryptjs');
var Q = require('q');
var _ = require('lodash');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');
var service = {};

service.signin = signin;
service.create = create;

module.exports = service;

function signin(username, password) {
  var deffered = Q.defer();

  User.findOne({ username: username }, function(err, user ) {
    if (err) {deffered.reject(err.name + ': ' + err.message);}

    if (user && bcrypt.compareSync(password, user.salt)) {
      deffered.resolve({
        //auth successfull
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: jwt.sign({sub: user._id},config.secret)
      })
    }else {
      //auth failed
      deffered.resolve();
    }
  })
  return deffered.promise;
}

function create(userParam) {
  var deffered = Q.defer();

  User.findOne({username : userParam.username}, function(err, user) {
    if(err)
      deffered.reject(err.name + ': ' + err.message);

    if(user) {
      // username already exists
      deffered.reject('Username "' + userParam.username + '" already exists');
    } else {
      createUser();
    }
  });

  function createUser() {
    var user = _.omit(userParam, 'password');

    user.salt = bcrypt.hashSync(userParam.password, 10);
    User.create(user,
      function(err, doc) {
        if(err) {
          deffered.reject(err.name + ': ' + err.message);
        }
        deffered.resolve();
      }
    )
  }
  return deffered.promise;
}
