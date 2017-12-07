const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel');
const Q = require('q');

var services = {};
services.create = create;
//services.getAll = getAll;

module.exports = services;

function create(hotelParam) {
  var deffered = Q.defer();
    var hotel = new Hotel({
      name: hotelParam.name,
      location: hotelParam.location
    });
    Hotel.create(hotel, function(err, hotel) {
        if(err) {
          deffered.reject(err.name + ': ' + err.message);
        }
        deffered.resolve();
    })

  return deffered.promise;
  }


