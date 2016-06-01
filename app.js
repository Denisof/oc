var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var HttpError = require('./error/index').HttpError;

// var routes = require('./routes/index');
// var users = require('./routes/users');
// var category = require('./routes/category');
// var product = require('./routes/product');

var app = express();


//require('daemon')();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port','3000');
http.createServer(app).listen(app.get('port'),function (){
  console.log("Server is running on port:" + app.get('port'));
});



// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var mongoose  = require('./libs/mongoose');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
  secret :"Opencart",
  key: "sid",
  cookie:{
    path:"/",
    httpOnly: true,
    maxAge: null
  },
  store: new MongoStore({mongooseConnection :mongoose.connection})
  
}));

// app.use('/', routes);
// app.use('/users', users);
// app.use('/category', category);
// app.use('/product', product);

/////Middleware which extends response object with a new method
app.use(require('./middlewares/sendhttperror'));

app.use(require("./middlewares/menu"));
app.use(require("./middlewares/cart"));

/////Main router
require('./routes/index')(app);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

//if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    if (typeof err == "number"){
      err = new HttpError(err);
    }
    if (err instanceof HttpError ){
      res.sendHttpError(err);
    }else{
      if (app.get('env') === 'development'){
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      }else{
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: {}
        });
      }
      
    }
    
  });
//}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;
