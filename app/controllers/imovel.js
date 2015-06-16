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

	return controller;
};