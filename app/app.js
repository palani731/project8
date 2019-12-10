var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const admin = require("firebase-admin");
const production_db = "https://restaurantmanagementsyst-1d9b1.firebaseio.com/";
const service_account = require("./restaurantmanagementsyst-1d9b1-firebase-adminsdk-uw6fl-bf3b47645d.json");
admin.initializeApp({ credential: admin.credential.cert(service_account), databaseURL: production_db });

var indexRouter = require('./routes/index');
var receptionRouter = require('./routes/reception');
var customerRouter = require('./routes/customer');
var menuRouter = require('./routes/menu');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/reception', receptionRouter);
app.use('/customer', customerRouter);
app.use('/menu', menuRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
