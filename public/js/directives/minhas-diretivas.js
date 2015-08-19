angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo: '@'
	};

	ddo.transclude = true;

 	ddo.templateUrl = 'js/directives/meu-painel.html';
		
	return ddo;
})
.directive('inputFile', function(){

	var ddo = {};

	ddo.restrict = "A";
	
	ddo.link = function(scope, element){
		scope.$on('fotoCadastrada', function(){
			alert(0);
		});
	}

	return ddo;
});