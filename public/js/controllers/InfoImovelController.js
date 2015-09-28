angular.module('imobiliaria').controller('InfoImovelController', function($scope, $routeParams, $timeout, $resource, $http){

	$scope.mensagem = {texto: ''};

	var Imovel = $resource('/imoveisNome/:id');

	if($routeParams.imovelId){
		Imovel.get({id: $routeParams.imovelId}, 
		function(imovel){
			$scope.imovel = imovel;
			console.log($scope.imovel);
			renderMap(imovel.endereco);
		}, 
		function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível obter o imovel'
			};
			console.log(erro);
		});
	}

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
	};


	$scope.enviaMensagem = function(){

		console.log($scope.imovel.caixaentrada);

		var _nome = $('form.enviaMensagem').find('.nome')[0].value,
			_email = $('form.enviaMensagem').find('.email')[0].value,
			_telefone = $('form.enviaMensagem').find('.telefone')[0].value,
			_mensagem = $('form.enviaMensagem').find('.mensagem')[0].value;
		
		$scope.imovel.caixaentrada.push({
			nome: _nome,
			telefone: _email,
			email: _telefone,
			mensagem: _mensagem
		});

		$scope.imovel.$save().then(function(){
			console.log('Mensagem enviada com sucesso!');
		}).catch(function(erro){
			console.log(erro);
			console.log('Não foi possivel enviar mensagem');
		});


	}

});
