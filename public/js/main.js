angular.module('imobiliaria', ['ngRoute','ngResource','minhasDiretivas', 'ngAnimate']).config(function($routeProvider){

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
	.when('/galeriaImovel/:imovelId', {
		templateUrl: 'partials/admin/galeria-imovel.html',
		controller: 'GaleriaImovelController'
	})
	.when('/quem-somos', {
		templateUrl: 'partials/quemSomos.html',
		controller: 'QuemSomosController'
	})
	.when('/images/upload', {
		templateUrl: 'partials/upload-images.html',
		controller: 'UploadImages'
	})
	.when('/login', {
		templateUrl: 'partials/login.html'
	})
	.when('/signup', {
		templateUrl: 'partials/signup.html'
	})
	.when('/admin', {
		templateUrl: 'partials/admin/principal.html',
		controller: 'AdminController'
	})
	.when('/admin/imoveis', {
		templateUrl: 'partials/admin/todos-imoveis.html',
		controller: 'TodosImoveis'
	})
	.when('/admin/usuarios', {
		templateUrl: 'partials/admin/usuarios.html',
		controller: 'UsuariosController'
	})
	.when('/admin/usuarios/:usuarioId', {
		templateUrl: 'partials/admin/perfil.html',
		controller: 'UsuarioController'
	})
	.when('/admin/caixaentrada/:usuarioId', {
		templateUrl: 'partials/admin/caixa-entrada.html',
		controller: 'UsuarioController'
	})
	.when('/admin/chatonline/:usuarioId', {
		templateUrl: 'partials/admin/chat-online.html'
	})

	.otherwise({redirectTo: '/imoveis'});
});	