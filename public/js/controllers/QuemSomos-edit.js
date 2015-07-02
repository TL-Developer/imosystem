angular.module('imobiliaria').controller('QuemSomosEditController', function($scope, Quemsomo, $routeParams, $timeout){

	$scope.mensagem = {texto: ''};

	if($routeParams.quemsomoId){
		Quemsomo.get({id: $routeParams.quemsomoId}, 
		function(quemsomo){
			$scope.quemsomo = quemsomo;
			console.log(quemsomo);
		}, 
		function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível obter o quemsomo'
			};
			console.log(erro);
		});
	}else{
		$scope.quemsomo = new Quemsomo();
	}

	$scope.salva = function(){
		$scope.quemsomo.$save().then(function(){
			$scope.mensagem = {
				texto: 'Salvo com sucesso'
			};

			$timeout(function(){ 
				$scope.mensagem = {
					texto: ''
				};
				window.location.href = '#/'
			}, 2000);

			$scope.quemsomo = new Quemsomo();
		}).catch(function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível salvar'
			};
			console.log(erro);
		});
	};

	// Quemsomo.query(function(imoveis){
	// 	$scope.imoveis = imoveis;
	// });

});
