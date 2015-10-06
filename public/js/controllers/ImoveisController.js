angular.module('imobiliaria').controller('ImoveisController', function($scope, Imovel, $timeout, $filter){

	$scope.imoveis = [];

	$scope.filtro = '';

	$scope.mensagem = {texto: ''};

	function buscaImoveis(){
		Imovel.query(function(imoveis){
			$scope.imoveis = imoveis;
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

	}

});