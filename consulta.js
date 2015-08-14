var MongoClient = require('mongodb').MongoClient,
	ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('5579760c77c19109c24e0931');

MongoClient.connect('mongodb://127.0.0.1:27017/imobiliaria', function(erro, db){
	if(erro) throw err;
	db.collection('imoveis').findOne({_id: _idProcurado}, function(erro, imovel){
		if(erro) throw err;
		console.log(imovel);
	});
});