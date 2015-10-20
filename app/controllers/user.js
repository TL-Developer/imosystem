var passport = require('passport');

// Assim como qualquer middleware, é quintessencial chamarmos next()
// Se o usuário estiver autenticado
var isAuthenticated = function (req, res, next) {
  if(req.isAuthenticated()){
    	return next();
  }else{
  	res.redirect('/');
  }
}

module.exports = function(app){

	var Imovel = app.models.imovel;
	var Usuarios = app.models.user;

	var controller = {};

	controller.getLogin = function(req, res){
		// res.render('register',{message: req.flash('message')});
		res.sendfile('./public/partials/login.html');
	};

	controller.postLogin = passport.authenticate('login', {
		successRedirect: '/#/admin',
		failureRedirect: '/#/login',
		failureFlash : true
	});

	controller.getSignup = function(req, res){
		if(req.user.username === 'tiago'){
			res.redirect('/#/signup');
		}else{
			res.redirect('/#/admin');
		}
	};

	controller.postSignup = passport.authenticate('signup', {
		successRedirect: '/#/admin',
		failureRedirect: '/signup',
		failureFlash : true
	});

	controller.getAdmin = function(req, res){

		if(req.isAuthenticated()){
			Imovel.find().exec().then(function(imoveis){
				res.json({
					user: req.user,
					imoveis: imoveis
				});
			},
			function(erro){
				console.error(erro);
				res.status(500).json(erro);
			});
		}else{
			res.redirect('/#/login');
		}
	};

	controller.signout = function(req, res){
		req.logout();
		res.redirect('/');
	};


	controller.enviaImagem = function(req, res){

		var multiparty = require('multiparty');
		var form = new multiparty.Form();

		form.parse(req, function(err, fields, files){

			var img = files.images[0];
			var fs = require('fs');

			fs.readFile(img.path, function(err, data){

				var path = './public/img/usuarios/'+img.originalFilename;

				console.log(path.substr(path.length - 4));

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

	controller.listaUsuarios = function(req, res){
		Usuarios.find().exec().then(function(usuarios){
			res.json(usuarios);
		},
		function(erro){
			console.error(erro);
			res.status(500).json(erro);
		});
	};

	controller.removeUsuario = function(req, res){
		var _id = req.params.id;

		Usuarios.remove({"_id": _id}).exec().then(function(){
			res.end();
		},
		function(erro){
			return console.error(erro);
		});
	};

	controller.obtemUsuario = function(req, res){
		var _id = req.params.id;

		Usuarios.find().exec().then(function(usuario){
			res.json(usuario);
		},
		function(erro){
			console.error(erro);
			res.status(500).json(erro);
		});
	};

	return controller;
};
