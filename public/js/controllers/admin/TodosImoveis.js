angular.module('imobiliaria').controller('TodosImoveis', function($scope, $http,$filter,$resource){

	$scope.imoveis = [];

	function buscaImoveis(){
		$http.get('/admin')
		.success(function(data){
			if(typeof data == 'object'){
				if(data.user.firstName == undefined){
					window.location.href = '/#/login';
				}else{
					$scope.imoveis = data.imoveis;
				}
			}else{
				window.location.href = '/#/login';
			}
		})
		.error(function(erro){
			console.log(erro);
		});	
	}
	buscaImoveis();

	$scope.remove = function(imovel){
		// Deleta Imovel
		$resource('/imoveis/:imovelId').delete({imovelId: imovel._id}, function(){
			$scope.mensagem = {
				texto: 'Imóvel removido com sucesso'
			};
			buscaImoveis();
		}, function(erro){
			$scope.mensagem = {
				texto: 'Não foi possível remover o imóvel'
			};
			console.log(erro);
		});			
	};
});