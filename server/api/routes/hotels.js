let express = require('express');
let router = express.Router();

let hotel = require("../controllers/hotels.controller");

router.get('/hotels', hotel.list);
router.post('/hotels', hotel.create);

module.exports = router;
