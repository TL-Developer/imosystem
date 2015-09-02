var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('static-favicon');
var logger = require('morgan');
var fs = require('fs');
var expressSession = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');

module.exports = function() {
  var app = express();

  app.set('port', 3000);

  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views','./app/views');
  // novos middlewares
  app.use(favicon());
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(require('method-override')());

  // Configurando PASSPORT
  app.use(expressSession({secret: 'mySecretKey'}));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(flash());


 load('models', {cwd: 'app'})
  .then('controllers')
  .then('routes')
  .into(app);

  return app;
};