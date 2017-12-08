let mongoose = require('mongoose');

let ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: [{
      String,
      String,
    }]
  },
  review: {
    type: String,
    requried: true
  },
  createdOn: {
    type: Number,
    "default": Date.now
  }
})
let Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
