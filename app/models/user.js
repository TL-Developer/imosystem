var mongoose = require('mongoose');

module.exports = function(){

	var UserSchema = mongoose.Schema({
		username: String,
		password: String,
		email: String,
		firstName: String,
		lastName: String,
		telefone: String,
		cidade: String,
		imagem: String,
		inclusao: {
			type: Date,
			default: Date.now
		}
	});

	return mongoose.model('Users', UserSchema);
};