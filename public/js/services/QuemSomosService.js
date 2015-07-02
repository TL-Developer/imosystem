angular.module('imobiliaria').factory('Quemsomo', function($resource){

	return $resource('/quemsomos/:id');
});