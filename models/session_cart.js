var express = require('express');
var router = express.Router();

function setCart(req,res,next){
	var products = req.session.cart.items ? req.session.cart.items : [];
	var total = req.session.cart.total ? req.session.cart.total : 0;

	this.addProduct(productId,quantity,options=[]){

	},
	this.delProducts(productId,quantity){

	},
	this.getTotal(){

	}

}


module.exports = setCart;