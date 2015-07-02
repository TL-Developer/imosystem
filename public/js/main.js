angular.module('imobiliaria', ['ngRoute','ngResource']).config(function($routeProvider){

	$routeProvider.when('/imoveis', {
		templateUrl: 'partials/imoveis.html',
		controller: 'ImoveisController'
	})
	.when('/imovel/:imovelId', {
		templateUrl: 'partials/imovel.html',
		controller: 'ImovelController'
	})
	.when('/imovel', {
		templateUrl: 'partials/imovel.html',
		controller: 'ImovelController'
	})
	.when('/infoImovel/:imovelId', {
		templateUrl: 'partials/infoImovel.html',
		controller: 'InfoImovelController'
	})
	.when('/quemSomos', {
		templateUrl: 'partials/quemSomos.html',
		controller: 'QuemSomosController'
	})
	.when('/quemSomos-edit', {
		templateUrl: 'partials/quemSomos-edit.html',
		controller: 'QuemSomosEditController'
	})
	.otherwise({redirectTo: '/imoveis'});
});	