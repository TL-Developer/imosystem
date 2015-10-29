var mongoose = require('mongoose');
// var Promise = require("bluebird");
// var debug    = require('debug')('imosystem:app/models');

module.exports = function(){

	var schema = new mongoose.Schema({
		cidade: {
			type: String,
			required: true
		},
		estado: {
			type: String,
			required: true
		},
		bairro: {
			type: String,
			required: true
		},
		curtidas: {
			type: Number
		},
		username: {
			type: String,
			required: true,
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
    proximidades: [
    	{
  			type: String
    	}
    ],
    areatotal: {
    	type: String,
    	required: true
    },
    caracteristicas: [
    	{
  			type: String
    	}
    ],
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
