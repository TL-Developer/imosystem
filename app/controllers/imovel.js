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

	// Pegando imovel pelo ID
	controller.obtemIdImovel = function(req, res){
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

	// Pegando imovel pelo Nome
	controller.obtemNomeImovel = function(req, res){
		var _id = req.params.id;

		Imovel.findOne({nome: _id}).exec().then(function(imovel){
			if (!imovel) throw new Error("Imovel não encontrado");
			res.json(imovel);
		},
		function(erro) {
			console.log(erro);
			res.status(404).json(erro)
		}
		);
	};

	// controller.obtemImovel = function(req, res){
	// 	var _id = req.params.id;

	// 	Imovel.findById(_id).exec().then(function(imovel){
	// 		if (!imovel) throw new Error("Imovel não encontrado");
	// 		res.json(imovel);
	// 	},
	// 	function(erro) {
	// 		console.log(erro);
	// 		res.status(404).json(erro)
	// 	}
	// 	);
	// };

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

	// controller.pegaImagem = function(req, res){
	// 	res.sendfile('./public/partials/upload-images.html');
	// };


	//var contador = 0;
	controller.enviaImagem = function(req, res){

		//contador++;
		var multiparty = require('multiparty');
		var form = new multiparty.Form();

		form.parse(req, function(err, fields, files){

			var img = files.images[0];
			var fs = require('fs');

			fs.readFile(img.path, function(err, data){

				//var extensaoImg = img.originalFilename.substr(img.originalFilename.length - 4);
				//var path = './public/img/imoveis/'+img.originalFilename.replace(extensaoImg, '_'+contador+extensaoImg);
				var path = './public/img/imoveis/'+img.originalFilename;

				// console.log(path.substr(path.length - 4));

				fs.writeFile(path, data, function(error){
					if(error){
						console.log(error);
					}else{
						res.sendfile('./public/partials/upload-images-success.html');
					}
				});

			});
		});
	};

	controller.excluirImagem = function(req, res){

		var fs = require('fs');
		var file = './public/img/imoveis/'+req.body.img;

		if(file){
			fs.unlink(file, function(err){
				if (err) throw err;
				res.sendfile('./public/partials/remove-images-success.html');
			});
		}

	};

	controller.enviaMensagem = function(req, res){

		var _id = req.body.selfId,
			_nome = req.body.nome,
			_email = req.body.email,
			_telefone = req.body.telefone,
			_mensagem = req.body.mensagem,
			_assunto = req.body.assunto;

		Imovel.findById(_id).exec().then(function(imovel){
			if (!imovel) throw new Error("Imovel não encontrado");

			imovel.caixaentrada.push({
				selfId: _id,
				nome: _nome,
				email: _email,
				telefone: _telefone,
				mensagem: _mensagem,
				assunto: _assunto
			});

			imovel.save(function (err) {
		        if(err) {
		            console.error('ERROR!');
		        }else{
		        	res.end('enviada com sucesso!');
		        }
		    });

		},
		function(erro) {
			console.log(erro);
			res.status(404).json(erro)
		}
		);
	};


	// Busca Imóvel
	controller.buscaImovel = function(req, res){

		var _transacao = req.body.transacao
			,	_tipo	    = req.body.tipo
			,	_bairro	 	  = req.body.bairro;

		Imovel.find(
			{$or:
				[
					{status: { $regex : new RegExp(_transacao, "i") } },
					{tipo: { $regex : new RegExp(_tipo, "i") } },
					{bairro: { $regex : new RegExp(_bairro, "i") }}
				]
			}
		).exec().then(function(imovel){
			console.log(imovel.length);
			res.json(imovel);
		});

	};

	controller.findListImoveis = function(req, res){

	};

	return controller;
};
