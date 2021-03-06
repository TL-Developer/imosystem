var http = require('http');
var app = require('./config/express')();
if(process.env.NODE_ENV == 'production'){
  require('./config/database.js')('mongodb://tiago:admin@ds041154.mongolab.com:41154/imoapp');
}else{
  require('./config/database.js')('mongodb://localhost/imobiliaria');
}
var server = http.createServer(app);
var io = require('socket.io').listen(server);
// var debug = require('debug')('imosystem');

app.set('io', io);

server.listen(app.get('port'), function(){
	console.log('Express Server escutando na porta ' + app.get('port'));
});

io.sockets.on('connection', function(socket){
	console.log('Usuário Conectado no chat online');

	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
	});

	socket.on('disconnect', function(){
	   console.log('Usuário Desconectado no chat online');
	});
});

// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express Server escutando na porta ' + app.get('port'));
// });
