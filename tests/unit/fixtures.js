'use strict';

var debug  = require('debug')('imosystem:fixtures')
  , assert = require('assert');

var fixtures = {
  mongo: {
    collection: function(){
      return fixtures.mongo
    },
    ObjectId: function(){
      return {};
    },
    find: function(query, callback){
      callback(null, [{"nickname": "Fives"}, {"nickname": "Fox"}]);
    },
    findOne: function(query, callback){
      callback(null, {"nickname": "Fives"});
    },
    insert: function(data, callback){
      callback(null, {"_id": "50", "nickname": "Rex"});
    },
    update: function(query, data, callback){
      callback(null, {"ok": 1, "nModified": 1, "n": 1});
    },
    remove: function(query, callback){
      callback(null, {"ok": 1, "n": 1});
    }
  },
  next: function(err){
    debug('catch err', err);
    assert.deepEqual(err, {});
  },
  request: {
    body: {},
    params: {},
    query: {}
  },
  reponse: {
    status: function(code){
      return {
        json: function(obj){
          debug('not mocked', obj);
        }
      }
    }
  }
};

module.exports = fixtures;
