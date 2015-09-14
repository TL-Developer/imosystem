angular.module('imobiliaria').controller('AdminController', function($scope, $http,$filter){

	$scope.usuario = [];
	$scope.imoveis = [];

	$http.get('/admin')
	.success(function(data){
		if(typeof data == 'object'){
			if(data.user.firstName == undefined){
				window.location.href = '/#/login';
			}else{
				// $scope.usuario = 'Olá '+data.user.firstName;
				$scope.usuario = data.user;
				$scope.imoveis = $filter('filter')(data.imoveis, {username: data.user.username});
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