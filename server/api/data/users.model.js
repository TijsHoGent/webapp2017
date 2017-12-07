const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    match : [/.+\@.+\..+/, "Please fill a valid e-mail address"]
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    validate: [(password) => {
      return password && password.length > 6;
    }, 'password must be longer that 6 chars']
  },
  reviews: [{}],
  salt: {
    type: String,
  },
  token: {
    type: String,
    unique: true,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User', UserSchema);

