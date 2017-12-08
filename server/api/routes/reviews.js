let express = require('express');
let router = express.Router();

let reviews = require('../controllers/reviews.controller');


router.get('/hotels/:hotelId/reviews', reviews.getReviews)

module.exports = router;
