var express = require('express');
var path = require('path');
var express_static = require('express-static');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swig = require ('swig');
var bodyparser = require('body-parser');
var mainRouter = require('./routers/main');
var adminRouter = require('./routers/admin');
var apiRouter = require('./routers/api');
var app = express();
var os = require('os')
// view engine setup
app.use( '/public', express.static( __dirname + '/public') );
app.engine('html',swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
swig.setDefaults({cache:false});
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/', mainRouter);
app.use('/admin', adminRouter);
app.use('/api',apiRouter);


module.exports = app;