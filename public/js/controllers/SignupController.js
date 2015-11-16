angular.module('imobiliaria').controller('SignupController', ['$scope', function($scope){


	$scope.unlockImovel = function(valor){
		if(valor){
			$scope.imagemShow = 'ligado';
			$scope.imagemHide = 'ligado';
		}
	};

}]);
