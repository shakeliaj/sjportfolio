var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var portfolioSchema = new Schema({
  title: { type: String, required: true},
  content: { type: String, required: true},
  images: [String],
  date: { type: Date, default: new Date() }
}, {collection: 'Portfolio'});

var Portfolio = mongoose.model('Portfolio', portfolioSchema);

// make this available to our users in our Node applications
module.exports = Portfolio;
