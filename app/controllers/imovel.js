/*{
	imagem: 'residencial.png',
	tipo: 'Residencial Vertical',
	nome: 'JARDIM DAS OLIMPIAS',
	valor: '489,000,000',
	endereco: 'av. berrini, 350 - vila olimpia São Paulo - SP',
	status: 'PRONTO PARA MORAR',
	qtdDormitorio: 2,
	qtdBanheiro: 3,
	qtdGaragem: 1
}*/

module.exports = function(app){
	
	var Imovel = app.models.imovel;

	var controller = {};

	controller.listaImoveis = function(req, res){
		Imovel.find().exec().then(function(imoveis){
			res.json(imoveis);
		},
		function(erro){
			console.error(erro);
			res.status(500).json(erro);
		});
	};

	controller.obtemImovel = function(req, res){
		var _id = req.params.id;

		Imovel.findById(_id).exec().then(function(imovel){
			if (!imovel) throw new Error("Imovel não encontrado");
			res.json(imovel);
		}, 
		function(erro) {
			console.log(erro);
			res.status(404).json(erro)
		}
		);    
	};

	controller.removeImovel = function(req, res){
		var _id = req.params.id;
		Imovel.remove({"_id": _id}).exec().then(function(){
			res.end();
		},
		function(erro){
			return console.error(erro);
		});
	};

	controller.salvaImovel = function(req, res){
		var _id = req.body._id;

		if(_id){
			Imovel.findByIdAndUpdate(_id, req.body).exec().then(function(imovel){
				res.json(imovel);
			},
			function(erro){
				console.error(erro);
				res.status(500).json(erro);
			});
		}else{
			Imovel.create(req.body).then(function(imovel){
				res.status(201).json(imovel);
			},
			function(erro){
				console.log(erro);
				res.status(500).json(erro);
			});
		}
	};

	controller.pegaImagem = function(req, res){
		res.sendfile('./public/partials/upload-images.html');
	};


	var contador = 0;
	controller.enviaImagem = function(req, res){

		contador++;
		var multiparty = require('multiparty');
		var form = new multiparty.Form();

		form.parse(req, function(err, fields, files){

			var img = files.images[0];
			var fs = require('fs');

			fs.readFile(img.path, function(err, data){

				var extensaoImg = img.originalFilename.substr(img.originalFilename.length - 4);
				var path = './public/img/imoveis/'+img.originalFilename.replace(extensaoImg, '_'+contador+extensaoImg);
				
				console.log(path.substr(path.length - 4));

				fs.writeFile(path, data, function(error){
					if(error){ 
						console.log(erro);
					}else{
						res.sendfile('./public/partials/upload-images-success.html');
					}
				});

			});
		});


	};

	return controller;
};