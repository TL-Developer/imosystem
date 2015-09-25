module.exports = function(app){
	var controller = app.controllers.imovel;

	app.route('/imoveis')
		.get(controller.listaImoveis)
		.post(controller.salvaImovel);

	app.route('/imoveis/:id')
		.get(controller.obtemIdImovel)
		.delete(controller.removeImovel);

	app.route('/imoveisNome/:id')
		.get(controller.obtemNomeImovel);

	app.route('/images/upload')
		.post(controller.enviaImagem);

	app.route('/images/remove')
		.post(controller.excluirImagem);
};