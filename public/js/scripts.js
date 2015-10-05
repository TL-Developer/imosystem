var modalSimpleStart = function(title, mensagem){
	var modal = $('.modal'),
		bodyTitle = modal.children('.modal-dialog').children('.modal-content').children('.modal-header').children('h4.modal-title'),
		bodyMensagem = modal.children('.modal-dialog').children('.modal-content').children('.modal-body').children('p'),
		btnsClose = modal.children('.modal-dialog').children('.modal-content').find('.fechar');

	bodyTitle.html(title);
	bodyMensagem.html(mensagem);

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
