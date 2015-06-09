module.exports = function(app){
	var controller = app.controllers.imovel;

	app.get('/imoveis', controller.listaImoveis);
	app.get('/imoveis/:id', controller.obtemImovel);
};