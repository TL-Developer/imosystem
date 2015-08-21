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
})
.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        //scope.fileread = loadEvent.target.result;
                        scope.fileread = changeEvent.target.files[0].name;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);