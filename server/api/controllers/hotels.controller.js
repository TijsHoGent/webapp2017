const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');

const hotelService = require('../services/hotel.service');

//error handling of mongoose
function getErrorMessage(err) {
  if(err.errors) {
    for(let errName in err.errors) {
      if(err.errors[errName].message) return err.errors[errName].message;
    }
  }else {
    return "unknown server error";
  }
}

module.exports.create = function(req, res) {
  let hotel = new Hotel();
  console.log(req.body);
  hotelService.create(req.body)
  .then(function() {
    res.sendStatus(200).json(req);
  }).catch(function(err){
    res.status(400).send(err);
  }) ;
}

module.exports.list = function(req, res, next) {
  console.log("getAll request called");

  Hotel.find(function(err, hotels) {
    if(err) {
      return next(err);
    }
    res.json(hotels);
  });
}
