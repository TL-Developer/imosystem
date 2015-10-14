var mongoose = require('mongoose'),
	mongoosastic = require('mongoosastic'),
	elasticsearch = require('elasticsearch'),
	Schema = mongoose.Schema,
	esClient = new elasticsearch.Client({host: 'localhost:3000', curlDebug: true});

module.exports = function(){

	var schema = new Schema({
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
	      required: true,
		  es_indexed: true,
		  es_type: 'string'
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

	schema.plugin(mongoosastic, {
	  esClient: esClient
	})

	var mySchema = mongoose.model('Imoveis', schema),
		stream = mySchema.synchronize(),
  		count = 0;

  	stream.on('data', function(err, doc){
	  count++;
	});
	stream.on('close', function(){
	  console.log('indexed ' + count + ' documents!');
	});
	stream.on('error', function(err){
	  console.log(err);
	});

	// mySchema.search({},function(err, results) {
	//   console.log(results);
	// });

	return mySchema;
};
