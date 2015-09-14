angular.module('imobiliaria').controller('InfoImovelController', function($scope, Imovel, $routeParams, $timeout){

	$scope.mensagem = {texto: ''};

	if($routeParams.imovelId){
		Imovel.get({id: $routeParams.imovelId}, 
		function(imovel){
			$scope.imovel = imovel;
			console.log(imovel);
			renderMap(imovel.endereco);
		}, 
		function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível obter o imovel'
			};
			console.log(erro);
		});
	}

	$scope.remove = function(imovel){
		Imovel.delete({id: imovel._id}, function(){
			$scope.mensagem = {
				texto: 'Imóvel removido com sucesso'
			};
			//buscaImoveis();
			
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

	var renderMap = function(adress){
		var map;
	    $(document).ready(function(){
	      map = new GMaps({
	        el: '#map',
	        lat: -12.043333,
	        lng: -77.028333
	      });
	     
	      GMaps.geocode({
	        address: adress,
	        callback: function(results, status){
	          if(status=='OK'){
	            var latlng = results[0].geometry.location;
	            map.setCenter(latlng.lat(), latlng.lng());
	            map.addMarker({
	              lat: latlng.lat(),
	              lng: latlng.lng()
	            });
	          }
	        }
	      });

	    });
	}
	

});
