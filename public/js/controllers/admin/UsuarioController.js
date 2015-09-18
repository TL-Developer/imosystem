angular.module('imobiliaria').controller('UsuarioController', function($scope, $http, $routeParams){

	$scope.usuario = [];

	$http.get('/admin')
	.success(function(data){
		if(typeof data == 'object'){
			if(data.user.firstName == undefined){
				window.location.href = '/#/login';
			}else{
				$scope.usuario = data.user;
			}
		}else{
			window.location.href = '/#/login';
		}
	})
	.error(function(erro){
		console.log(erro);
	});

	$scope.salva = function(){
		// $scope.usuario.$save().then(function(){
		// 	$scope.mensagem = {
		// 		texto: 'Salvo com sucesso'
		// 	};

		// 	$timeout(function(){ 
		// 		$scope.mensagem = {
		// 			texto: ''
		// 		};
		// 		window.location.href = '/#/admin'
		// 	}, 2000);

		// 	$scope.usuario = new $resource('/imoveis/:id');
		// }).catch(function(erro){
		// 	$scope.mensagem = {
		// 		texto: 'Não foi possível salvar'
		// 	};
		// 	console.log(erro);
		// });
	};

});