var express = require('express');
var router = express.Router();
var Category = require('../models/category').Category;

var async = require('async');


function getMenu(req, res, next){
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
					
						res.locals.categories = results;
					next();
			});
		
	});
}
module.exports = getMenu;