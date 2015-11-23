var mongoose = require('mongoose');
// var Promise = require("bluebird");
// var debug    = require('debug')('imosystem:app/models');
var elasticsearch = require('elasticsearch');
var mongoosastic = mongoosastic = require('mongoosastic');



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
      required: true,
      es_indexed: true
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
      required: true,
      es_indexed: true
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

  var esClient = new elasticsearch.Client({host: 'http://localhost:3000/?pretty0'});


  schema.plugin(mongoosastic,{
    esClient: esClient,
    hosts: [
      'localhost:3000'
    ]
  });

	var ImovelSchema = mongoose.model('Imoveis', schema);

  ImovelSchema.createMapping(function(err, mapping){
    if(err){
      console.log('error creating mapping (you can safely ignore this)');
      console.log(err);
    }else{
      console.log('mapping created!');
      console.log(mapping);
    }
  });

  return ImovelSchema;
};
