let mongoose = require('mongoose');

let Review = mongoose.model('Review');

let HotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  createdBy: {
    type: String,
  },
  reviews: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Review'
  }],
  createdAt: Number
});

mongoose.model('Hotel', HotelSchema);
