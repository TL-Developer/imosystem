angular.module('imobiliaria').factory('Imovel', function($resource){

	return $resource('/imoveis/:id');
});