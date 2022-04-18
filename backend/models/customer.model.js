const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  	firstName : String,
	lastName : String,
	email: String,
	phoneNumber: String,
	orders: Number,
	location: String
});


module.exports = mongoose.model('CustomerModel', schema);