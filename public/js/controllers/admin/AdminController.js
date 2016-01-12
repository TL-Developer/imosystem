angular.module('imobiliaria').controller('AdminController', ['$scope','$http','$filter','$resource', function($scope, $http,$filter,$resource){

	$scope.usuario = [];
	$scope.imoveis = [];
	$scope.todosImoveis = [];
	$scope.mensagensLength;

	function buscaImoveis(){
		$http.get('/admin')
		.success(function(data){
			if(typeof data == 'object'){
				if(data.user.firstName == undefined){
					window.location.href = '/#/login';
				}else{
					if(data.user.username === 'tiago'){
						$scope.todosImoveisShow = 'show';
						$scope.todosUsuariosShow = 'show';
					}
					$scope.usuario = data.user;
					$scope.imoveis = $filter('filter')(data.imoveis, {username: data.user.username});
					$scope.todosImoveis = data.imoveis;

					var quantidadeMensagens = 0;
					for(var i = 0; i < $scope.imoveis.length; i++){
						quantidadeMensagens += $scope.imoveis[i].caixaentrada.length;
						$scope.mensagensLength = quantidadeMensagens;
					}
				}
			}else{
				window.location.href = '/#/login';
			}
		})
		.error(function(erro){
			console.log(erro);
		});
	}
	buscaImoveis();



	// Pegando usuarios
	$scope.usuarios = [];
	$http.get('/users')
	.success(function(data){
		$scope.usuarios = data;
	})
	.error(function(erro){
		console.log(erro);
	});

	$scope.remove = function(imovel){
		// Deleta Imovel
		$resource('api/imoveis/:imovelId').delete({imovelId: imovel._id}, function(){
			$scope.mensagem = {
				texto: 'Imóvel removido com sucesso'
			};
			buscaImoveis();
		}, function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível remover o imóvel'
			};
			console.log(erro);
		});
	};
}]);
