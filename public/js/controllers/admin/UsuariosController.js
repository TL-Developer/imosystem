angular.module('imobiliaria').controller('UsuariosController', ['$scope','$http','$resource','$timeout','$filter' ,function($scope, $http, $resource, $timeout, $filter){

	$scope.usuario = [];

	$http.get('/admin')
	.success(function(data){
		if(typeof data == 'object'){
			if(data.user.firstName == undefined){
				window.location.href = '/#/login';
			}else if(data.user.username !== 'tiago'){
				window.location.href = '/#/admin';
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


	// Pegando usuarios
	$scope.usuarios = [];
	$http.get('/users')
	.success(function(usuarios){
		$scope.usuarios = usuarios;
	})
	.error(function(erro){
		console.log(erro);
	});

	$scope.remove = function(usuario){

		var Imovel = $resource('/imoveis');
		Imovel.query(function(imoveis){
			var imovelRemove = $filter('filter')(imoveis, {username: usuario.username});

			// Deleta Imovel
			$resource('/imoveis/:id').delete({id: imovelRemove[0]._id}, function(){
				$scope.mensagem = {
					texto: 'Imóvel removido com sucesso'
				};
				$timeout(function(){
					$scope.mensagem = {
						texto: ''
					};
					window.location.href = '#/admin/usuarios';
				}, 3000);
			}, function(erro){
				$scope.mensagem = {
					texto: 'Não foi possível remover o imóvel'
				};
				console.log(erro);
			});
		});

		// Deleta Usuario
		$resource('/users/:id').delete({id: usuario._id}, function(){
			$scope.mensagem = {
				texto: 'Usuário removido com sucesso'
			};
			$timeout(function(){
				$scope.mensagem = {
					texto: ''
				};
				window.location.href = '#/admin/usuarios';
			}, 3000);
		}, function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível remover o usuario'
			};
			console.log(erro);
		});

		$timeout(function(){
			$scope.mensagem = {
				texto: ''
			};
			window.location.href = '#/admin/usuarios';
		}, 3000);

	};
}]);
