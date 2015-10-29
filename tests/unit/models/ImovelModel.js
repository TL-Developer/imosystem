var fixtures    = require('../fixtures')
  , ImovelModel = require('../../../app/models/imovel')(fixtures.mongo)
  , assert      = require('assert')
  , debug       = require('debug')('imosystem:test');

describe('ImovelModel', function(){
  it('#listaImoveis', function(done) {
    ImovelModel.find({}, function(err, result){
      assert.deepEqual(result);
      done();
    });
  });
  it('#obtemIdImovel', function() {});
  it('#obtemNomeImovel', function() {});
  it('#removeImovel', function() {});
  it('#salvaImovel', function() {});
  it('#enviaImagem', function() {});
  it('#excluirImagem', function() {});
  it('#enviaMensagem', function() {});
});
