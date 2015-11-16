angular.module('imobiliaria').controller('GaleriaImovelController', ['$scope','Imovel','$routeParams','$timeout','$http' ,function($scope, Imovel, $routeParams, $timeout, $http){

	$scope.mensagem = {texto: ''};

	function buscaImoveis(){
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
		}
	}
	buscaImoveis();

	$scope.usuario = [];

	$http.get('/admin')
	.success(function(data){
		if(typeof data == 'object'){
			if(data.user.firstName == undefined){
				window.location.href = '/#/login';
			}else{
				$scope.usuario = data.user;
			}
		}else{
			window.location.href = '/#/login';
		}
	})
	.error(function(erro){
		console.log(erro);
	});

	$scope.remove = function(imovel){
		Imovel.delete({id: imovel._id}, function(){
			$scope.mensagem = {
				texto: 'Imóvel removido com sucesso'
			};
			buscaImoveis();

			$timeout(function(){
				$scope.mensagem = {
					texto: ''
				};
				window.location.href = '#/'
			}, 3000);
		}, function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível remover o imóvel'
			};
			console.log(erro);
		});
	};

	Imovel.query(function(imoveis){
		$scope.imoveis = imoveis;
	});


	// Salvando imagens para galeria.
	$scope.salva = function(imagem){

		$scope.imovel.imagem.push(imagem);
		$scope.imovel.$save().then(function(){
			console.log('Imagem salva com sucesso');

			window.location.href = '/#/galeriaImovel/'+$routeParams.imovelId;
			buscaImoveis();

		}).catch(function(erro){
			console.log(erro);
			console.log('Não foi possivel salvar');
		});
	};

	$scope.removeFoto = function(foto){

		var posFoto = $scope.imovel.imagem.indexOf(foto);

		$scope.imovel.imagem.splice(posFoto, 1);

		$scope.imovel.$save().then(function(){
			console.log('Imagem excluida com sucesso!');
		}).catch(function(){
			console.log('Não foi possível excluir esta imagem :(');
		});

	};


}]);
