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


var async = require('async');
var _ = require('underscore');
var exphbs  = require('express-handlebars');


var data = {};

router.get('/:id',function(req, res, next){
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
				
					data.categories = results;
				next();
		});
	
});
});


router.get('/:id',function(req, res, next){
	     var id = req.params.id;
		Product.findOne({product_id:id},function (err,result){
			if (err) throw err
			// console.log(result.product_id);
			data.product = result;
			var product = result;
			
			async.parallel({
				description: function(callback){
					 
					Product_description.find({product_id:data.product.product_id},function(err,result){
						if(err) throw err
							callback(null,result);
					});
				},
				product_image:function(callback){
					Product_image.find({product_id:data.product.product_id},function(err,result){
						if(err) throw err
							callback(null,result);
					});
				},
				product_options:function(callback){
					Product_option.find({product_id:data.product.product_id},function(err,product_options){
						if(err) throw err

							if(product_options.length > 0){
								async.map(product_options,function(item,callback){

									if(item.value ==""){
										Product_option_value.find({product_option_id:item.product_option_id},function(err,product_option_values){
											if(err) throw err
												async.map(product_option_values,function(product_option_value,callback){
													async.parallel({
														option:function(callback){
															Option.findOne({option_id:product_option_value.option_id},function(err,option){
																if(err) throw err
																//item.type = result.type;
																//console.log(result);
																callback(null,option);

															});
														},
														option_value_description:function(callback){
															Option_value_description.findOne({option_value_id:product_option_value.option_value_id},function(err,option_value_description){
																if(err) throw err
																//item.type = result.type;
																//console.log(result);
																callback(null,option_value_description);
															});
														},
														option_description:function(callback){
															Option_description.findOne({option_id:item.option_id},function(err,result){
																if(err) throw err
																	//console.log(result);
																callback(null,result);
															});

														}
													},function(err,results){
														
														item.type = results.option.type;
														product_option_value.type = results.option.type;
														item.name = results.option_description.name;
														product_option_value.name = results.option_value_description.name;
														callback(null,product_option_value);
													});
												},function(err,product_option_values){
													console.log(product_option_values);
													//return object item of product options array
													item.product_option_value = product_option_values;
													callback(null,item);
												});
										});
									}else{
										async.parallel({
											option:function(callback){
												Option.findOne({option_id:item.option_id},function(err,result){
													if(err) throw err
													callback(null,result);

												});
											},
											option_description:function(callback){
												Option_description.findOne({option_id:item.option_id},function(err,result){
													if(err) throw err
														//console.log(result);
													callback(null,result);
												});

											},
										},function(err,results){
											//console.log(results.option_description.name);
											item.type = results.option.type;
											item.name = results.option_description.name;
											
											callback(null,item);
										});
									}
								},function(err,results){
									//returns this result to property product_option of result object it's an array of options objects
									//console.log(results['0'].product_option_value.name);
									callback(null,results);
								});
								
							}else{
								callback();

							}
							//callback(null,result);
							
					});
				}

			},function(err,results){
				data.product.product_options = results.product_options;

				// console.log(data.product.product_options["0"].name );
				data.product.product_image = results.product_image;
				data.product.description = results.description;
				console.log(data.product.details);
				data.helpers = {
					if_eq: function(a,b,opts){
						if (a == b) {
					        return opts.fn(this);
					    } else {
					        return opts.inverse(this);
					    }
					}
				}
				res.render('product', data);
			});




		});

});
module.exports = router;