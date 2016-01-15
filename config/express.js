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
var helmet = require('helmet');


module.exports = function() {


  var app = express();

  app.set('port', 3000);

  // app.use(function(req, res, next){
  //   if(req.url === '/favicon.ico'){
  //     res.writeHead(200, {'Content-type': 'image/x-icon'});
  //   }else{
  //     next();
  //   }
  // });

  app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


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

  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
  app.disable('x-powered-by');
  app.use(helmet.ieNoOpen());


 load('models', {cwd: 'app'})
  .then('controllers')
  .then('routes')
  .into(app);

  app.use(function(req, res, next){
    res.status(404).sendfile('./public/partials/404.html');
    next();
  });

  app.use(function(err, req, res, next){
    if(process.env.NODE_ENV == 'production'){
      res.status(500).sendfile('./public/partials/500.html');
      return ;
    }
    next(err);
  });

  return app;
};
