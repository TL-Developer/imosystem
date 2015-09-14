angular.module('imobiliaria').controller('PerfilController', function($scope, $http){

	$scope.usuario = [];

	$http.get('/admin')
	.success(function(data){
		if(typeof data == 'object'){
			if(data.user.firstName == undefined){
				window.location.href = '/#/login';
			}else{
				// $scope.usuario = 'Olá '+data.user.firstName;
				$scope.usuario = data.user;
				console.log(data.user);
			}
		}else{
			window.location.href = '/#/login';
		}
	})
	.error(function(erro){
		console.log(erro);
	});
});