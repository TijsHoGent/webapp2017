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

mongoose.model('Review', ReviewSchema);
