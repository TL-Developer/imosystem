angular.module('imobiliaria').controller('SignupController', function($scope){


	$scope.unlockImovel = function(valor){
		if(valor){
			$scope.imagemShow = 'ligado';
			$scope.imagemHide = 'ligado';
		}
	};

});
