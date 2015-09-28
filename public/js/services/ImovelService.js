angular.module('imobiliaria').factory('Imovel', function($resource){

	return $resource('/imoveis/:id');
})

.factory('Usuario', function($resource){

	return $resource('/usuario/:id');
});