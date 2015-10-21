angular.module('imobiliaria').controller('UsuarioController', function($scope, $http, $routeParams, $filter, $resource){

	$scope.usuario = [];
	$scope.imoveis = [];
	$scope.mensagensLength;

	$http.get('/admin')
	.success(function(data){
		console.log(data);
		if(typeof data == 'object'){
			if(data.user.firstName == undefined){
				window.location.href = '/#/login';
			}else{
				$scope.usuario = data.user;
				$scope.imoveis = $filter('filter')(data.imoveis, {username: data.user.username});

				var quantidadeMensagens = 0;
				for(var i = 0; i < $scope.imoveis.length; i++){
					quantidadeMensagens += $scope.imoveis[i].caixaentrada.length;
					$scope.mensagensLength = quantidadeMensagens;
				}
			}
		}else{
			window.location.href = '/#/login';
		}
	})
	.error(function(erro){
		console.log(erro);
	});

	$scope.salva = function(){
		// $scope.usuario.$save().then(function(){
		// 	$scope.mensagem = {
		// 		texto: 'Salvo com sucesso'
		// 	};

		// 	$timeout(function(){
		// 		$scope.mensagem = {
		// 			texto: ''
		// 		};
		// 		window.location.href = '/#/admin'
		// 	}, 2000);

		// 	$scope.usuario = new $resource('/imoveis/:id');
		// }).catch(function(erro){
		// 	$scope.mensagem = {
		// 		texto: 'Não foi possível salvar'
		// 	};
		// 	console.log(erro);
		// });
	};


	$scope.removerMensagem = function(mensagem){

		var Imovel = $resource('/imoveis');
		Imovel.query(function(imoveis){

			var id = mensagem._id;

			var imovel = $filter('filter')(imoveis, {_id: mensagem.selfId});
			var mensagens = imovel[0].caixaentrada;
			var mensageRemove = $filter('filter')(mensagens, {_id: id});

			function findWithAttr(array, attr, value) {
			    for(var i = 0; i < array.length; i += 1) {
			        if(array[i][attr] === value) {
			            return i;
			        }
			    }
			}
			var pos = findWithAttr(mensagens, '_id', id);
			mensagens.splice(pos, 1);

			$resource('/imoveis/:id', { _id: id }, {
		    update: {
		      method: 'POST'
		    }
		  });

		});
	}



	// Pegando usuarios
	$scope.usuarios = [];
	$http.get('/users')
	.success(function(usuarios){
		$scope.usuarioClicado = $filter('filter')(usuarios, {_id: $routeParams.usuarioId});
		$scope.usuarios = $scope.usuarioClicado;
	})
	.error(function(erro){
		console.log(erro);
	});


	$scope.abrirMensagem = function(mensagem){
		modalReadEmail(mensagem);
	};



	// var cores = ['alert alert-info', 'alert alert-success', 'alert alert-warning', 'alert alert-danger'],
	var cores = ['#ccc', '#ff3300']
		coresIncrement = 0;
		socket = io.connect(),
		$messageBox = $('#message'),
		$chat = $('#chat');


	var sendMensagem = function(valor, posicao){

		return '<div class="row"><div class="col-md-11">'+
					'<div class="direct-chat-msg '+posicao+'">'+
				    '  <div class="direct-chat-info clearfix">'+
				    '    <span class="direct-chat-name pull-left">'+$scope.usuario.firstName+'</span>'+
				    '    <span class="direct-chat-timestamp pull-right">'+new Date()+'</span>'+
				    '  </div>'+
				    '  <img class="direct-chat-img" alt="message user image" src="img/usuarios/'+$scope.usuario.imagem+'">'+
				    '  <div class="direct-chat-text">'+valor+'</div>'+
				    '</div>'+
				'</div></div>';

	};

	$scope.sendMessage = function(){

		socket.emit('send message', sendMensagem($messageBox.val(), 'righ'));

		// socket.emit('send message', '<div class="row"><div class="col-md-12"><img style="width: 35px; height: 35px; float: left; margin: 1% 2% 0 0;" class="img-responsive img-circle" src="img/usuarios/'+$scope.usuario.imagem+'" alt="'+$scope.usuario.firstName+'" title="'+$scope.usuario.firstName+' '+new Date()+'"> <div class="'+cores[coresIncrement]+'" style="float: left;"><h5 class="text-info nopadding">'+$messageBox.val()+'</h5></div></div>  </div');
		$messageBox.val('');
	};

	socket.on('new message', function(data){

		$chat.append(data);

	});
});

// <div class="row"><div class="col-md-12"><img style="width: 35px; height: 35px; float: left; margin: 1% 2% 0 0;" class="img-responsive img-circle" src="img/usuarios/'+$scope.usuario.imagem+'" alt="'+$scope.usuario.firstName+'" title="'+$scope.usuario.firstName+' '+new Date()+'"> <div class="'+cores[coresIncrement]+'" style="float: left;"><h5 class="text-info nopadding"></h5></div></div>  </div>
