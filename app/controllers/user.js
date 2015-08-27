var passport = require('passport');

module.exports = function(app){
	
	var User = app.models.user;

	var controller = {};

	controller.login = function(req, res){
		passport.authenticate('login', {
			successRedirect: '/',
		    failureRedirect: '/',
		    failureFlash : true
		});
	};

	controller.renderSignup = function(req, res){
		// res.render('register',{message: req.flash('message')});
		res.sendfile('./public/partials/signup.html');
	};

	controller.signup = function(req, res){
		passport.authenticate('signup', {
			successRedirect: '/',
			failureRedirect: '/signup',
			failureFlash : true
		});
	};


	return controller;
};