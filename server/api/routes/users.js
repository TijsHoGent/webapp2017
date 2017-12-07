var express = require('express');
var router = express.Router();
let passport = require('passport');

let user = require('../controllers/users.controller.js');

/* Routes. */
router.post('/signin', user.signin);
router.post('/signup', user.signup);

module.exports = router;
