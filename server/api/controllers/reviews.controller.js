let mongoose = require('mongoose');
let Review = mongoose.model('Review');

let reviewService = require('../services/review.service');

module.exports.getReviews = function(req, res, next) {
  let hotelId = req.params.hotelId;
  console.log(hotelId);
  reviewService.getAll(hotelId, function(response) {
    if(response) {
      res.send(response);
    }else {
      res.status(400).send(response);
      next(response);
    }
  })
}
