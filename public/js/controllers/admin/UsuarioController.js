angular.module('imobiliaria').controller('UsuarioController', function($scope, $http, $routeParams, $filter, $resource){

	$scope.usuario = [];
	$scope.imoveis = [];

	$http.get('/admin')
	.success(function(data){
		console.log(data);
		if(typeof data == 'object'){
			if(data.user.firstName == undefined){
				window.location.href = '/#/login';
			}else{
				$scope.usuario = data.user;
				$scope.imoveis = $filter('filter')(data.imoveis, {username: data.user.username});
			}
		}else{
			window.location.href = '/#/login';
		}
	})
	.error(function(erro){
		console.log(erro);
	});

	$scope.salva = function(){
		// $scope.usuario.$save().then(function(){
		// 	$scope.mensagem = {
		// 		texto: 'Salvo com sucesso'
		// 	};

		// 	$timeout(function(){ 
		// 		$scope.mensagem = {
		// 			texto: ''
		// 		};
		// 		window.location.href = '/#/admin'
		// 	}, 2000);

		// 	$scope.usuario = new $resource('/imoveis/:id');
		// }).catch(function(erro){
		// 	$scope.mensagem = {
		// 		texto: 'Não foi possível salvar'
		// 	};
		// 	console.log(erro);
		// });
	};


	$scope.removerMensagem = function(mensagem){

		var Imovel = $resource('/imoveis');
		Imovel.query(function(imoveis){

			console.log(imoveis);

			var imovelRemove = $filter('filter')(imoveis, {_id: mensagem.selfId});
			var mensagemRemove = $filter('filter')(imovelRemove[0].caixaentrada, {selfId: mensagem.selfId});

			// console.log($filter('filter')(imoveis[3].caixaentrada, {selfId: mensagem.selfId}));

			// console.log($filter('filter')(mensagem, {_id: mensagem.selfId}));

			// Deleta Mensagem
			// $resource('/imoveis/:id').delete({id: imovelRemove[0]._id}, function(){
			// 	$scope.mensagem = {
			// 		texto: 'Imóvel removido com sucesso'
			// 	};
			// }, function(erro){
			// 	$scope.mensagem = {
			// 		texto: 'Não foi possível remover o imóvel'
			// 	};
			// 	console.log(erro);
			// });

		});
	}
});