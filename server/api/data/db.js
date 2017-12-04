var mongoose = require('mongoose');
let dbUrl = 'mongodb://localhost:27017/webappdb';

mongoose.connect(dbUrl);

mongoose.connection.on("connected", () => {
  console.log('Mongoose has connected');
})
mongoose.connection.on("disconnected", () => {
  console.log('Mongoose has disconnected');
})
mongoose.connection.on("error", (err) => {
  console.log('an error has occurred. ', err);
})

//initialize schema and requires
require('./hotels.model');
require('./reviews.model');


