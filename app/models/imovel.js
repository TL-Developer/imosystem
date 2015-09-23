var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = function(){

	var schema = new Schema({
		username: {
			type: String
		},
		usernameImagem: {
			type: String
		},
		nome: { 
	      type: String 
	    }, 
	    tipo: {
	      type: String
	    }, 
	    imagem: [
	      {type: String}
	    ], 
	    valor: {
	      type: String
	    }, 
	    endereco: {
	      type: String
	    }, 
	    status: {
	      type: String
	    }, 
	    qtdDormitorio: {
	      type: Number 
	    }, 
	    qtdBanheiro: {
	      type: Number 
	    }, 
	    qtdGaragem: {
	      type: Number 
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