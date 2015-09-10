angular.module('imobiliaria').controller('AdminController', function($scope, $http){

	$scope.usuario = '';
	$scope.imoveis = [];

	$http.get('/admin')
	.success(function(data){
		if(typeof data == 'object'){
			if(data.user.firstName == undefined){
				window.location.href = '/#/login';
			}else{
				$scope.usuario = 'Olá '+data.user.firstName;
				$scope.imoveis = data.imoveis;
			}
		}else{
			window.location.href = '/#/login';
		}
	})
	.error(function(erro){
		console.log(erro);
	});
});