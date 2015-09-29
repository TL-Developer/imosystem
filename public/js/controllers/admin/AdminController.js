angular.module('imobiliaria').controller('AdminController', function($scope, $http,$filter,$resource){

	$scope.usuario = [];
	$scope.imoveis = [];

	function buscaImoveis(){
		$http.get('/admin')
		.success(function(data){
			if(typeof data == 'object'){
				if(data.user.firstName == undefined){
					window.location.href = '/#/login';
				}else{
					$scope.usuario = data.user;
					$scope.imoveis = $filter('filter')(data.imoveis, {username: data.user.username});
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
		$resource('/imoveis/:imovelId').delete({imovelId: imovel._id}, function(){
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
});