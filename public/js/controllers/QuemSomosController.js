angular.module('imobiliaria').controller('QuemSomosController', function($scope, Imovel, $routeParams, $timeout){

	$scope.mensagem = {texto: ''};

	if($routeParams.imovelId){
		Imovel.get({id: $routeParams.imovelId}, 
		function(imovel){
			$scope.imovel = imovel;
			console.log(imovel);
		}, 
		function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível obter o imovel'
			};
			console.log(erro);
		});
	}

	Imovel.query(function(imoveis){
		$scope.imoveis = imoveis;
	});

});
