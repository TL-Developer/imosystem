module.exports = function(app){
	var controller = app.controllers.imovel;

	app.route('/api/imoveis')
		.get(controller.listaImoveis)
		.post(controller.salvaImovel);

	app.route('/search')
		.post(controller.buscaImovel)
		.get(controller.findListImoveis);

	app.route('/api/imoveis/:id')
		.get(controller.obtemIdImovel)
		.delete(controller.removeImovel);

	app.route('/imoveisNome/:id')
		.get(controller.obtemNomeImovel);

	app.route('/imoveisNome')
		.post(controller.enviaMensagem);

	app.route('/images/upload')
		.post(controller.enviaImagem);

	app.route('/images/remove')
		.post(controller.excluirImagem);

};
