var express = require('express');
var router = express.Router();
var Category = require('../models/category').Category;
var Product = require('../models/product').Product;
var Product_description = require('../models/product_description').Product_description;
var async = require('async');
var _ = require('underscore');




/* GET home page. */
router.get('/', function(req, res, next) {
	Category.find({parent_id : 0},function(err,results){
	if(err) throw err

		async.map(results,function(item,callback){

			Category.find({parent_id : item.category_id},function(err,results){
				
				if(err) throw err
				item['children'] = results;
				//console.log(item['children'] );
				callback(err,item);
			});

		},function(err,results){
			if(err) throw error
				var data = {
					title : "Main page",
					categories : results
				}
				Product.find(function(err,results){
					//console.log(results);
					async.map(results,function(item,callback){
						Product_description.find({product_id:item.product_id},function(err,results){
							if(err) throw err
								//_.extend(item,results);
								
								item['name'] =results.name;
								callback(err,item);
						});
					},function(err,results){
						console.log(results['0'].name);
						data.products = results.splice(0,4);
						//console.log(results);
						res.render('index', data)
					});
				}); 
		});
	
});
 
});

module.exports = router;

//res.render('index', data);