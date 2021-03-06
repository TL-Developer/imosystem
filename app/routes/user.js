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

	app.route('/images/upload-usuario')
		.post(controller.enviaImagem);

	app.route('/users')
		.get(controller.listaUsuarios)
		.post(controller.salvaUsuario);

	app.route('/users/:id')
		.delete(controller.removeUsuario);

	app.route('/admin/usuarios/:id')
		.get(controller.obtemUsuario)
		.post(controller.editPerfil);
};
