var express = require('../config/express')();
var request = require('supertest')(express);

var http = require('http');

describe('#ImoveisController', function(){
  // it('#listagem json', function(done){

  //   request.get('/#/imoveis')
  //   .expect(200, done);
  // });

  it('#cadastro de novo imóvel com dados invalidos', function(done){
    request.post('/api/imoveis')
    .send({'cidade':'são paulo'})
    .expect(200, done);
  });
});
