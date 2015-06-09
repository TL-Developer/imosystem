angular.module('imobiliaria').controller('ImoveisController', function($scope){
	
	$scope.filtro = '';
	
	$scope.imoveis = [
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
		}
	];
});