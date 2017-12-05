const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');

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
  const hotel = new Hotel(req.body);
  hotel.save((err) => {
    if(err) {
      return res.status(400).send({message: getErrorMessage(err)});
    }else {
      res.status(200).json(hotel);
    }
  })
}

exports.list = function(res, req) {
  Hotel
  .find()
  .exec((err, hotels) => {
    if(err) {
      return res.status(400).send({message: getErrorMessage(err)});
    } else {
      res.status(200).json(hotels);
    }
  })
}
