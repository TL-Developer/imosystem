var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

module.exports = function(){

	var schema = new Schema({
		username: {
			type: String,
			required: true
		},
		usernameImagem: {
			type: String,
			required: true
		},
		nome: { 
	      type: String,
	      required: true
	    }, 
	    tipo: {
	      type: String,
	      required: true
	    }, 
	    imagem: [
	      {
	      	type: String,
	      	required: true
	      }
	    ], 
	    valor: {
	      type: String,
	      required: true
	    }, 
	    endereco: {
	      type: String,
	      required: true
	    }, 
	    status: {
	      type: String,
	      required: true
	    }, 
	    qtdDormitorio: {
	      type: Number,
	      required: true
	    }, 
	    qtdBanheiro: {
	      type: Number,
	      required: true
	    }, 
	    qtdGaragem: {
	      type: Number,
	      required: true
	    },
	    descricao: {
	    	type: String,
	    	required: true
	    },
	    proximidades: {
	    	type: String,
	    	required: true
	    },
	    areatotal: {
	    	type: String,
	    	required: true
	    },
	    caracteristicas: {
	    	type: String,
	    	required: true
	    },
	    caixaentrada: [
	    	{
		    	selfId: {type: String},
		    	nome: {type: String},
		    	email: {type: String},
		    	telefone: {type: String},
		    	mensagem: {type: String},
		    	assunto: {type: String},
		    	created: {
					type: Date,
					default: Date.now
				}
	    	}
	    ],
	    created: {
	    	type: Date,
			default: Date.now
	    }
	});

	return mongoose.model('Imoveis', schema);
};