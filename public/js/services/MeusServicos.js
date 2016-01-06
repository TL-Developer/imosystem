angular.module('imobiliaria')

.factory('Imovel', ['$resource', function($resource){

	return $resource('/api/imoveis/:id');
}])

.factory('Users', ['$resource', function($resource){

  return $resource('/users');
}])

.factory('Usuario', ['$resource', function($resource){

	return $resource('/usuario/:id');
}]);
