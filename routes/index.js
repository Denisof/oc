var express = require('express');
var router = express.Router();
var Category = require('../models/category').Category;
var async = require('async');


// var categories = {
// 	title : "Main page",
// 	categories:[
// 	{
// 		href:"/Computers",
// 		name: "Computers"
// 	},
// 	{
// 		href:"/Phones",
// 		name: "Phones"
// 	},{
// 		href:"/Laptops",
// 		name: "Laptops"
// 	}
// 	]
// };


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
			console.log(results['0']);
			if(err) throw error
				var data = {
					title : "Main page",
					categories : results
				}
				 res.render('index', data);
		});
	
});
 
});

module.exports = router;
