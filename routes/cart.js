var express = require('express');
var router = express.Router();
var Category = require('../models/category').Category;
var Product_category = require('../models/product_category').Product_category;
var Product = require('../models/product').Product;
var Product_description = require('../models/product_description').Product_description;
var Option = require('../models/option').Option;
var Product_image = require('../models/product_image').Product_image;
var Product_option = require('../models/product_option').Product_option;
var Product_option_value = require('../models/product_option_value').Product_option_value;
var Option_description = require('../models/option_description').Option_description;
var Option_value_description = require('../models/option_value_description').Option_value_description;


var HttpError = require('../error/index').HttpError;
var mongoose  = require('../libs/mongoose');



var async = require('async');
var _ = require('underscore');


router.post("/add",function(req, res, next){
	var body = req.body;
	
	var options = [];
	options = _.map(body,function(value, key, list){
		if (!isNaN(key) && key != undefined){
			
			return Number(key);
		}
	});
	options = _.filter(options,function(value,key){
		if(value == undefined) return false
			return true
	})

	async.waterfall([
		function(callback){
			Product.findOne({product_id:req.body.product_id},function(err,product){
				var product = product.toObject();
				Product_description.findOne({product_id:product.product_id},function(err,description){
					if(err) throw error
						if(description){
							var description = description.toObject();
							product.name = description.name;
						}
						
						callback(null,product);
				});
			});
		},
		function(product,callback){

			if(product){

				Product_option.find({product_id:product.product_id},function(err,options){
					callback(null,product,options);
				});
			}else{
				next(404,'Product not found');
			}

		},
		function(product,product_options,callback){
			if(product_options.length > 0){
				var error = {};
				error.option = {};
				var valid = [];
				_.each(product_options,function(element){
					if(element.required){
						if(!_.include(options,Number(element.product_option_id))){
							error.option[element.product_option_id] = '';
							valid.push(element.product_option_id);
						}else{
							if(req.body[element.product_option_id] == ''){
								error.option[element.product_option_id] = '';
								valid.push(element.product_option_id);
							}
						} 	
					}	
				});
				
				if(valid.length > 0){
					res.json({error:error,redirect:"/product/"+ product.product_id});
					//Option_description.find({option_id:{$in : valid}},function(err,))
				}else{
					callback(null,product,product_options);
				}
			}else{
				req.cart.addProduct(product,req.body.quantity);
				
				res.json({success:"You have added an item to your cart",total:req.cart.getItemsAmount()+" items"+req.cart.getTotal()+"$"});
			}
			
		},
		function (product,product_options,callback){
			//var product = product.toObject();
			async.map(product_options,function(product_option,callback){
				var product_option = product_option.toObject();
				Product_option_value.find({product_option_id:product_option.product_option_id},function(err,product_option_values){
					if(err) throw error
						var product_option_values  = product_option_values.map(function(doc){return doc.toObject()});
					if(product_option_values.length == 0){
						product_option.value = req.body[product_option.product_option_id];
						Option_description.findOne({option_id:product_option.option_id},function(err,description){
							if(err) throw err

								
								var description_name =  description.toObject().name;
								// product_option.name = description.name;
								// callback(null,product_option);
								 product_option.name =  description_name;
								 
								callback(null,product_option);
						});
						
					}else{
						var porduct_option_values_filtered = _.filter(product_option_values,function(element){
							
							if(req.body[element.product_option_id] instanceof  Array){
								
								if(_.include(req.body[element.product_option_id],String(element.product_option_value_id))){
									return true
								}else{
									return false
								}
							}else{
								if(req.body[element.product_option_id] == element.product_option_value_id){
									return true
								}else{
									return false
								} 
							}
						});
						
						
						async.map(porduct_option_values_filtered,function(product_option_value,callback){
							Option_value_description.findOne({option_value_id:product_option_value.option_value_id},function(err,option_value_description){
								if (err) throw error
									 //var product_option_value = product_option_value.toObject();
									var option_value_description  = option_value_description.toObject();

									product_option_value.name = option_value_description.name;
									callback(null,product_option_value);
							});
						},function(err,product_option_values){
							callback(null,product_option_values);
						});

					}
				});
			},function(err,product_options){
					
					product.options = product_options;
					
					req.cart.addProduct(product,req.body.quantity);
					callback(null,product);
			});
		},

		],function(err,product){
			res.json({success:"You have added an item to your cart",total:req.cart.getItemsAmount()+" items"+req.cart.getTotal()+"$"});
		});

});

router.get("/info",function(req, res, next){
		res.render('cart_info', {layout:'cart'});
});

router.post("/remove",function(req, res, next){
		// res.render('cart_info', {layout:'cart'});
		req.cart.delProduct(req.body.key);
		res.json({total:req.cart.getItemsAmount()+ "item(s) "+req.cart.getTotal()+"$" });
});

module.exports = router;