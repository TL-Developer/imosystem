var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = function(){

	var schema = new Schema({
		nome: { 
	      type: String, 
	    }, 
	    tipo: {
	      type: String, 
	    }, 
	    imagem: {
	      type: String
	    }, 
	    valor: {
	      type: Number, 
	    }, 
	    endereco: {
	      type: String, 
	    }, 
	    status: {
	      type: String
	    }, 
	    qtdDormitorio: {
	      type: Number, 
	    }, 
	    qtdBanheiro: {
	      type: Number, 
	    }, 
	    qtdGaragem: {
	      type: Number, 
	    },
	    descricao: {
	    	type: String
	    },
	    caracteristicas: {
	    	type: String
	    }
	});

	return mongoose.model('Imoveis', schema);
};