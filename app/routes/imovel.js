module.exports = function(app){
	var controller = app.controllers.imovel;

	app.route('/imoveis')
		.get(controller.listaImoveis)
		.post(controller.salvaImovel);

	app.route('/imoveis/:id')
		.get(controller.obtemImovel)
		.delete(controller.removeImovel);
};