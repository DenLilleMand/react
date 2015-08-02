// Dependency setup
var express = require('express');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
/*
 *var React = require('react');
 *var App = require('../client/js/components/App');
 *var Application = require('../client/js/Application');
 *var Routes = require('../client/js/Routes');
 */

// Initialization
var app = express();

/* Standard settings for express */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
}
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
/*
 *Setting the static folder to ../build, this is the folder we\'re going to be serving,
 *as static content.
 */
app.use(express.static(path.join(__dirname, '../build'))); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

 app.get('*', function(req,res){
   res.render('index');
 });
 
/*
 *This would be if we would do SSR:
 */
/*
 *app.use(require('marty-express')({
 *        marty:require('marty'),
 *        application:Application,
 *        routes:Routes,
 *        state:'state',
 *        body:'body'
 *}));
 */


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
