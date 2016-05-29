var express = require('express');
var router = express.Router();
var Category = require('../models/category').Category;
var Product_category = require('../models/product_category').Product_category;
var Product = require('../models/product').Product;
var Product_description = require('../models/product_description').Product_description;
var async = require('async');
var _ = require('underscore');

var data = {};

router.get('/:id',function(req, res, next){
	Category.find({parent_id : 0},function(err,results){
	if(err) throw err
		async.map(results,function(item,callback){

			Category.find({parent_id : item.category_id},function(err,results){
				
				if(err) throw err
				item['children'] = results;
				callback(err,item);
			});

		},function(err,results){
			if(err) throw error
				
					data.categories = results;
				next();
		});
	
});
});


// router.get('/:id',function(req, res, next){
// 		Product_category.find({category_id:req.params.id},function (err,results){
			
// 			async.map(results,function(item,callback){
// 						Product.find({product_id:item.product_id},function(err,results){
// 							if(err) throw err
								
// 								callback(err,item);
// 						});
// 					},function(err,results){
// 						//console.log(results['0'].name);
						
// 							data.products = results
						

// 						console.log(data);
// 						res.render('category', data);
// 					});
// 		});

// });
router.get('/:id',function(req, res, next){
		Product_category.find({category_id:req.params.id},function (err,results){
			
			async.map(results,function(item,callback){
						Product.findOne({product_id:item.product_id},function(err,product){
							if(err) throw err
										
										Product_description.findOne({product_id:item.product_id},function(err,results){
											if(results != undefined){
												console.log(results.name );
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
		});

});

module.exports = router;