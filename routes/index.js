
// module.exports = router;
var express = require('express');
var router = express.Router();
var home = require('./home');
var users = require('./users');
var category = require('./category');
var product = require('./product');
var cart = require('./cart');
var checkout = require('./checkout');

module.exports = function(app){

   


  app.use('/', home);
  app.use('/users', users);
  app.use('/category', category);
  app.use('/product', product);
  app.use('/cart',cart);
  app.use('/checkout',checkout);




}
