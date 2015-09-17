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
	.when('/admin/perfil', {
		templateUrl: 'partials/admin/perfil.html',
		controller: 'PerfilController'
	})
	.when('/admin/usuarios', {
		templateUrl: 'partials/admin/usuarios.html',
		controller: 'UsuariosController'
	})
	.when('/admin/usuarios/:usuarioId', {
		templateUrl: 'partials/admin/usuario.html',
		controller: 'UsuarioController'
	})


	.otherwise({redirectTo: '/imoveis'});
});	