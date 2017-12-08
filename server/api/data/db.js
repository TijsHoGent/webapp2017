var mongoose = require('mongoose');
let dbUrl = 'mongodb://localhost:27017/webappdb';

mongoose.connect(dbUrl, { useMongoClient: true});

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
require('./users.model');
require('./reviews.model');
require('./hotels.model');


