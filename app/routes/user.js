// Assim como qualquer middleware, é quintessencial chamarmos next()
// Se o usuário estiver autenticado

var passport = require('passport');

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports = function(app){

	/* GET Login Page */
	app.get('/login', function(req, res){
		// res.render('register',{message: req.flash('message')});
		res.sendfile('./public/partials/login.html');
	});

	/* Handle Login POST */
	app.post('/login', passport.authenticate('login', {
		successRedirect: '/admin',
		failureRedirect: '/',
		failureFlash : true  
	}));

	/* GET Registration Page */
	app.get('/signup', function(req, res){
		// res.render('register',{message: req.flash('message')});
		res.sendfile('./public/partials/signup.html');
	});

	/* Handle Registration POST */
	app.post('/signup', passport.authenticate('signup', {
		successRedirect: '/#/admin',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	/* GET Home Page */
	app.get('/admin', isAuthenticated, function(req, res){
		res.render('admin', { user: req.user });
	});

	/* Handle Logout */
	app.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};