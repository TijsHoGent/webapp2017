let express = require('express');
let router = express.Router();

let hotel = require("../controllers/hotels.controller");

router.get('/api/hotels', function(req, res, next) {
  hotel.list(res,req);
});

router.post('/api/hotels', function(req, res, next) {
  hotel.create(req, req);
})
module.exports = router;
