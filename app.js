const express = require('express');
const http = require('http');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var config = require('./config');

const index = require('./routes/index');
const replique = require('./routes/replique');

mongoose.connect('mongodb://'+config.mongo.user+':'+config.mongo.password+'@'+config.mongo.uri+':'+config.mongo.port+'/oss117');

mongoose.Promise = global.Promise;

const app = express();
var server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery


app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow:");
});

app.get('/googleeab3954313ec6a29.html', function (req, res) {
  res.type('text/html');
  res.send("google-site-verification: googleeab3954313ec6a29.html");
});

app.use('/', index);
app.use('/api/v1/replique', replique);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});


module.exports = app;
