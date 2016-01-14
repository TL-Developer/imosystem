var http = require('http');
var assert = require('assert');
describe('#ImoveisController', function(){
  it('#listagem json', function(done){

    var configuracoes = {
      hostname: 'localhost',
      port: 3000,
      path: '/#/imoveis',
      headers: {
        'Accept':'application/json'
      }
    };

    http.get(configuracoes, function(res){
      assert.equal(res.statusCode, 200);
      assert.equal(res.headers['content-type'],'text/html; charset=UTF-8');
      done();
    });

  });
});
