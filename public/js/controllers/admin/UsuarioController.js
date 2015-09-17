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



	$scope.remove = function(usuario){
		$resource('/users/:id').delete({id: usuario._id}, function(){
			$scope.mensagem = {
				texto: 'Usuário removido com sucesso'
			};
			//buscaImoveis();
			
			$timeout(function(){ 
				$scope.mensagem = {
					texto: ''
				};
				window.location.href = '#/'
			}, 3000);
		}, function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível remover o usuario'
			};
			console.log(erro);
		});
	};
});