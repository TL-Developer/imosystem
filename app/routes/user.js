var passport = require('passport');

module.exports = function(app){

	var controller = app.controllers.user;

	app.route('/login')
		.get(controller.getLogin)
		.post(controller.postLogin);

	app.route('/signup')
		.get(controller.getSignup)
		.post(controller.postSignup);

	app.route('/admin')
		.get(controller.getAdmin);
	
	app.route('/signout')
		.get(controller.signout);
};

	
// app.get('/admin', isAuthenticated, function(req, res){
// 	res.json(req.user);
// });


// app.get('/signout', function(req, res) {
// 	req.logout();
// 	res.redirect('/');
// });
