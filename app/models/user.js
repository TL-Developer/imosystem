var mongoose = require('mongoose');

module.exports = function(){

	var UserSchema = mongoose.Schema({
		username: String,
		password: String,
		email: String,
		gender: String,
		address: String
	});

	return mongoose.model('User', UserSchema);
};