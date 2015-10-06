var modalReadEmail = function(mensagem){
	var modal = $('.modalReadEmail'),
		textNome = modal.find('.box-title'),
		textAssunto = modal.find('.assunto-mensagem'),
		textEmail = modal.find('.email-mensagem'),
		textTelefone = modal.find('.telefone-mensagem'),
		textMensagem = modal.find('.mensagem-mensagem'),
		btnsClose = modal.find('.fechar');

	textNome.html('Mensagem de: '+mensagem.nome);
	textAssunto.html('Assunto: '+mensagem.assunto);
	textEmail.html('Email: '+mensagem.email+'<span class="mailbox-read-time pull-right">'+mensagem.created+'</span>');
	textTelefone.html('Telefone: '+mensagem.telefone);
	textMensagem.html('Mensagem: <br />'+mensagem.mensagem);

	modal.hide().css({
		'opacity':'1'
	}).fadeIn(500);

	btnsClose.on('click', function(){
		modal.fadeOut(500, function(){
			modal.css({
				'opacity':'0'
			});
		});
	});
};

var curtiu = function(self){
	
	$(self).css({
		'opacity':'1',
		'width': '18%',
		'height': '120%'
	});

	setTimeout(function(){
		$(self).off('click');
	}, 1000);

};