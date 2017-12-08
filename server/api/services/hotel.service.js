const mongoose = require("mongoose");
const Hotel = mongoose.model("Hotel");
const Q = require("q");
const _ = require('lodash');
var services = {};

services.create = create;
services.getAll = getAll;

module.exports = services;

function create(hotelParam) {
  var deffered = Q.defer();
  Hotel.findById(hotelParam._id, function(err, hotel) {
    if (err) {
      deffered.reject(err.name + ": " + err.message);
    }
    if (hotel) {
      deffered.reject("Hotel: " + hotel.name + " already exists");
    } else {
      createHotel();
    }
  });
  function createHotel() {
    Hotel.create(hotelParam, function(err, hotel) {
      if (err) {
        deffered.reject(err.name + ": " + err.message);
      }
      deffered.resolve();
    });
  }

  return deffered.promise;
}

function getAll() {
  var deffered = Q.defer();
  Hotel.find({}, function(err, hotels ) {
    if(err) deffered.reject(err.name + ': ' + err.message);

    hotels = _.map(hotels, function(hotel) {
      return _.omit(hotel, 'createdAt');
    })

    deffered.resolve(hotels);
  });
  return deffered.promise;
}

