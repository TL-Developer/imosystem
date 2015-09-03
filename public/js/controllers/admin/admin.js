angular.module('imobiliaria').controller('AdminController', function($scope, $http){

	$scope.usuario = '';

	$http.get('/admin')
	.success(function(user){
		$scope.usuario = 'Olá '+user.firstName;
		
		if(user.firstName == undefined){
			window.location.href = '/#/login';
		}
	})
	.error(function(erro){
		console.log(erro);
	});
});