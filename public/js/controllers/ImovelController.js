angular.module('imobiliaria').controller('ImovelController', function($scope, Imovel, $routeParams, $timeout, $http){

	$scope.mensagem = {texto: ''};

	if($routeParams.imovelId){
		Imovel.get({id: $routeParams.imovelId},
		function(imovel){
			$scope.imovel = imovel;
			console.log(imovel);
		},
		function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível obter o imovel'
			};
			console.log(erro);
		});
	}else{
		$scope.imovel = new Imovel();
		$scope.imovel.caracteristicas = [];
		$scope.imovel.proximidades = [];
	}

	$scope.salva = function(){
		$scope.imovel.$save().then(function(){
			$scope.mensagem = {
				texto: 'Salvo com sucesso'
			};

			$timeout(function(){
				$scope.mensagem = {
					texto: ''
				};
				window.location.href = '/#/admin'
			}, 2000);

			$scope.imovel = new Imovel();
		}).catch(function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível salvar'
			};
			console.log(erro);
		});
	};

	Imovel.query(function(imoveis){
		$scope.imoveis = imoveis;
	});


	// Buscando Username
	$scope.usuario = [];

	$http.get('/admin')
	.success(function(data){
		if(data.user == undefined){
			window.location.href = '/#/login';
		}else{
			$scope.imovel.username = data.user.username;
			$scope.imovel.usernameImagem = data.user.imagem;

			$scope.usuario = data.user;
		}
	}).error(function(erro){
		console.log(erro);
	});



	// AÇÕES CARACTERÍSTICAS
	$scope.inserirCaracteristicas = function(){

		var caracteristicas = $('.listaCaracteristicas'),
			valorCaracteristicas = $('.listaCaracteristicas').val();

		$scope.imovel.caracteristicas.push(valorCaracteristicas);

		caracteristicas.val('');
	};

	$scope.excluirCaracteristicas = function(caracteristica){

		var posCaract = $scope.imovel.caracteristicas.indexOf(caracteristica);

		$scope.imovel.caracteristicas.splice(posCaract, 1);
	};

	// AÇÕES PROXIMIDADES
	$scope.inserirProximidades = function(){

		var proximidades = $('.listaProximidadesLocal'),
			valorProximidades = $('.listaProximidadesLocal').val();

		$scope.imovel.proximidades.push(valorProximidades);

		proximidades.val('');

		console.log($scope.imovel);
	};

	$scope.excluirProximidades = function(proximidades){

		var posProximidades = $scope.imovel.proximidades.indexOf(proximidades);

		$scope.imovel.proximidades.splice(posProximidades, 1);

		console.log($scope.imovel);
	};

	$scope.unlockImovel = function(valor){
		if(valor){
			$scope.imagemShow = 'ligado';
			$scope.imagemHide = 'ligado';
		}
	};

});
