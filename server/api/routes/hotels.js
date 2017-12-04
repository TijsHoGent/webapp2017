let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let Hotel = mongoose.model('Hotel');

router.get('/api/hotels', function(req, res, next) {
  Hotel.find(function(err, hotels) {
    if(err) { return next(err) }
    res.json(hotels);
  });
});

router.get('/api/hotels/:id', function(req, res, next) {
  Hotel.findById(req.params.id, function(err, hotel) {
    if(err) {return next(err)}
    if(!hotel) {
      return next(new Error('not found ' + req.params.id));
    }
    res.json(hotel);
  });
});

router.post('/api/hotels', function(req, res, next) {
  let hotel = new Hotel(req.body);
  hotel.save(function(err, hotel) {
    if(err) { return next(err) }
    res.json(hotel);
  })
});

module.exports = router;
