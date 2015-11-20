angular.module('imobiliaria').factory('Imovel', ['$resource', function($resource){

	return $resource('/imoveis/:id');
}])

.factory('Usuario', ['$resource', function($resource){

	return $resource('/usuario/:id');
}]);
