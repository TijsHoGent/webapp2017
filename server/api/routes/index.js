var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const user = (!req.user) ? null: {
    _id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName
  }
    res.render('index', {
      title: 'hello world',
      user: JSON.stringify(user)
    })
  });

module.exports = router;
