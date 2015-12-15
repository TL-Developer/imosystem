angular.module('imobiliaria').controller('BuscaImovelController', function($scope, $filter, $resource){

	$scope.imoveis = [];

	$scope.mensagem = {texto: ''};

	function buscaImoveis(){
		$resource('/search').query(function(imovel){
			$scope.imoveis = imovel;
			console.log(imoveis);
		},
		function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível obter a lista de imoveis'
			};
			console.log(erro);
		});
	};
	buscaImoveis();


	$scope.curtir = function(id){

		var selfImovel = $filter('filter')($scope.imoveis, {_id: id});

		if( selfImovel[0].curtidas == undefined){
			selfImovel[0].curtidas = 1;
		}else{
			selfImovel[0].curtidas += 1;
		}

		selfImovel[0].$save().then(function(){
			console.log('Salvo Curtidas');
		}, function(erro){
			console.log(erro);
			console.log('Não foi possível salvar');
		});

	};

});
