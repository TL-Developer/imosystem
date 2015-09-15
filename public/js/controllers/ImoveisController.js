angular.module('imobiliaria').controller('ImoveisController', function($scope, Imovel, $timeout){

	$scope.imoveis = [];

	$scope.filtro = '';

	$scope.mensagem = {texto: ''};

	function buscaImoveis(){
		Imovel.query(function(imoveis){
			$scope.imoveis = imoveis;
			console.log(imoveis);
		},
		function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível obter a lista de imoveis'
			};
			console.log(erro);
		});
	};
	buscaImoveis();
});