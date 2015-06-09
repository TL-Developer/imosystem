angular.module('imobiliaria', ['ngRoute']).config(function($routeProvider){

	$routeProvider.when('/imoveis', {
		templateUrl: 'partials/imoveis.html',
		controller: 'ImoveisController'
	})
	.when('/imovel/:imovelId', {
		templateUrl: 'partials/imovel.html',
		controller: 'ImovelController'
	})
	.otherwise({redirectTo: '/imoveis'});
});	