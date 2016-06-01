var express = require('express');
var router = express.Router();
var Category = require('../models/category').Category;
var Product_category = require('../models/product_category').Product_category;
var Product = require('../models/product').Product;
var Product_description = require('../models/product_description').Product_description;
var async = require('async');
var _ = require('underscore');
var HttpError = require('../error/index').HttpError;

var data = {};


router.get('/:id',function(req, res, next){
	if (isNaN(req.params.id)) return next(new HttpError(404,"Wrong request"))

		Product_category.find({category_id:req.params.id},function (err,results){
			if (err) throw err
			if(!results || results.length == 0) {
				next(new HttpError(404,"Product you are requesting is not found"));
			}else{
				async.map(results,function(item,callback){
						Product.findOne({product_id:item.product_id},function(err,product){
							if(err) throw err
										
									Product_description.findOne({product_id:item.product_id},function(err,results){
										if(results != undefined){
											product.name = results.name;
										}
																			
										callback(err,product);
									});	
						});
					},function(err,results){
						//console.log(results);
						
							data.products = results;
						res.render('category', data);
					});
			}
			
		});

});

module.exports = router;