var imoveis = [
	{
		_id: 1,
		imagem: 'img/residencial.png',
		tipo: 'Residencial Vertical',
		nome: 'JARDIM DAS OLIMPIAS',
		valor: '489,000,000',
		endereco: 'av. berrini, 350 - vila olimpia São Paulo - SP',
		status: 'PRONTO PARA MORAR',
		qtdDormitorio: 2,
		qtdBanheiro: 3,
		qtdGaragem: 1
	},
	{
		_id: 2,
		nome: 'Jardim Helena',
		descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nisi, aliquam repellat, fugiat totam nulla ipsam, consectetur blanditiis neque molestias cum nemo, incidunt inventore laboriosam porro vero cumque in rem.'
	},
	{
		_id: 3,
		nome: 'Itaim Paulista',
		descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nisi, aliquam repellat, fugiat totam nulla ipsam, consectetur blanditiis neque molestias cum nemo, incidunt inventore laboriosam porro vero cumque in rem.'
	}
];

module.exports = function(){
	var controller = {};

	controller.listaImoveis = function(req, res){
		res.json(imoveis);
	};

	controller.obtemImovel = function(req, res){
		var idImovel = req.params.id;
		var	imovel = imoveis.filter(function(imovel){
				return imovel._id == idImovel;
			})[0];
			imovel ?
			res.json(imovel) : 
		res.status(404).send('Imovel não encontrado');
	};

	return controller;
};