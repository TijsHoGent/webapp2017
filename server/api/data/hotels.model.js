let mongoose = require('mongoose');

let ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  review: {
    type: String,
    requried: true
  },
  createdOn: {
    type: Date,
    "default": Date.now
  }
})

let HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location_name: String,
  location_id: Number,
  description: {
    type: String,
    required: false,
    "default": ""
  },
  country_name: String,
  photos_count: Number,
  reviews: [ReviewSchema],
  start: {
    type: Number,
    min: 0,
    max: 5,
    "default": 0
  }
});

mongoose.model('Hotel', HotelSchema);
