var express = require('express');
var router = express.Router();
var Order = require('../models/order').Order;
var Product = require('../models/product').Product;
var Product_description = require('../models/product_description').Product_description;
var async = require('async');
var _ = require('underscore');





router.get('/', function(req, res, next) {
	res.render('checkout');
 
});
router.post('/remove', function(req, res, next) {
	req.cart.delProduct(req.body.key);
	res.json({redirect:"/checkout" });
 
});
router.post('/submit', function(req, res, next) {
	var cart = req.cart.getCart();
	var order = new Order({items:cart.items,total:cart.total,firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email});
	order.save(function(){
		req.cart.clearCart();
		res.render('checkout',{success:"Your order has been placed succesfully"});
	});
 
});
module.exports = router;