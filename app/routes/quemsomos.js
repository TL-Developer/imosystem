module.exports = function(app){
	var controller = app.controllers.quemsomos;

	app.route('/quemSomos-edit')
		.get(controller.listaQuemsomos)
		.post(controller.salvaQuemsomo);

	app.route('/quemSomos/:id')
		.get(controller.obtemQuemsomo)
		.delete(controller.removeQuemsomo);
};