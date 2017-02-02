var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var monk = require('monk');


var home = require('./controllers/home');
var blog = require('./controllers/blog');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//setting up mongodb
monk('localhost:27017/PersonalBlog', function(err, db){
      if(err) {
        console.log('cannot connect to the database');
        throw err;
      }
    var attachDB = function(req, res, next){
      req.db = db;
      next();
    }
    //set up all controllers
    app.use('/', attachDB, home);
    app.use('/blog', attachDB, blog);


    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        // render the error page
        res.status(err.status || 500);
        res.render('base/error');
    });

});

module.exports = app;

