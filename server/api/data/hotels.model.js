let mongoose = require('mongoose');

let HotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  createdBy: {
    type: String,
  },
  createdAt: Number
});

mongoose.model('Hotel', HotelSchema);
