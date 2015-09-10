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
		res.sendfile('./public/partials/signup.html');
	};

	controller.postSignup = passport.authenticate('signup', {
		successRedirect: '/#/admin',
		failureRedirect: '/signup',
		failureFlash : true  
	});

	controller.getAdmin = function(req, res){
		// if(isAuthenticated){
		// 	res.json(req.user);
		// }
		if(req.isAuthenticated()){
			console.log('aqui')
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
		res.redirect('/#/login');
	};

	return controller;
};