var mongoose = require('mongoose');

module.exports = function(){

	var schema = mongoose.Schema({
		nome: { 
	      type: String, 
	      required: true
	    }, 
	    tipo: {
	      type: String, 
	      required: true, 
	    }, 
	    imagem: {
	      type: String
	    }, 
	    valor: {
	      type: Number, 
	      required: true, 
	    }, 
	    endereco: {
	      type: String, 
	      required: true, 
	    }, 
	    status: {
	      type: String
	    }, 
	    qtdDormitorio: {
	      type: Number, 
	      required: true, 
	    }, 
	    qtdBanheiro: {
	      type: Number, 
	      required: true, 
	    }, 
	    qtdGaragem: {
	      type: Number, 
	      required: true, 
	    }
	});

	return mongoose.model('Imoveis', schema);
};