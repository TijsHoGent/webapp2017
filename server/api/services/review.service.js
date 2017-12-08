let mongoose = require('mongoose');
let Hotel = mongoose.model('Hotel');
let Review = mongoose.model('Review');
let _ = require('lodash');
let Q = require('q');

var service = {}
service.getAll = getAll;
module.exports = service;

function getAll(hotelId, next) {
  Hotel.findById(hotelId, function(err, hotel) {
    if(err) return next(err);

    if(hotel) {
      let reviews = hotel.reviews;
      return next(reviews);
    }
  });


}
