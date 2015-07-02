angular.module('imobiliaria').controller('QuemSomosController', function($scope, Quemsomo, $routeParams, $timeout){

	$scope.mensagem = {texto: ''};

	if($routeParams.quemsomoId){
		Quemsomo.get({id: $routeParams.quemsomoId}, 
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

	Quemsomo.query(function(quemsomos){
		$scope.quemsomos = quemsomos;
	});

});
