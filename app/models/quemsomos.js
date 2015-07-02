var mongoose = require('mongoose');

module.exports = function(){

	var schema = mongoose.Schema({
		titulo: { 
	      type: String, 
	      required: true
	    }
	});

	return mongoose.model('Quemsomos', schema);
};