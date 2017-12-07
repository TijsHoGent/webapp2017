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

exports.create = function(res, req) {
  let hotel = new Hotel();
  console.log(req.body);
  hotelService.create(req.body)
  .then(function() {
    res.sendStatus(200).json(req);
  }).catch(function(err){
    res.status(400).send(err);
  }) ;
}

exports.list = function(res, req) {
  hotelService.getAll();
}
