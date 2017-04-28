var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var contactSchema = new Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  email: { type: String, required: true},
  phone: String,
  message: { type: String, required: true},
  date: { type: Date, default: new Date() }
}, {collection: 'Contact'});

var Contact = mongoose.model('Contact', contactSchema);

// make this available to our users in our Node applications
module.exports = Contact;
