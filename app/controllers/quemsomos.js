module.exports = function(app){
	
	var Quemsomo = app.models.quemsomos;

	var controller = {};

	controller.listaQuemsomos = function(req, res){
		Quemsomo.find().exec().then(function(quemsomos){
			res.json(quemsomos);
		},
		function(erro){
			console.error(erro);
			res.status(500).json(erro);
		});
	};

	controller.obtemQuemsomo = function(req, res){
		var _id = req.params.id;

		Quemsomo.findById(_id).exec().then(function(quemsomo){
			if (!quemsomo) throw new Error("Quemsomo não encontrado");
			res.json(quemsomo);
		}, 
		function(erro) {
			console.log(erro);
			res.status(404).json(erro)
		}
		);    
	};

	controller.removeQuemsomo = function(req, res){
		var _id = req.params.id;
		Quemsomo.remove({"_id": _id}).exec().then(function(){
			res.end();
		},
		function(erro){
			return console.error(erro);
		});
	};

	controller.salvaQuemsomo = function(req, res){
		var _id = req.body._id;

		if(_id){
			Quemsomo.findByIdAndUpdate(_id, req.body).exec().then(function(quemsomo){
				res.json(quemsomo);
			},
			function(erro){
				console.error(erro);
				res.status(500).json(erro);
			});
		}else{
			Quemsomo.create(req.body).then(function(quemsomo){
				res.status(201).json(quemsomo);
			},
			function(erro){
				console.log(erro);
				res.status(500).json(erro);
			});
		}
	};

	return controller;
};