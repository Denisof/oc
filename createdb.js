// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

// var Category = require('./models/category').Category;

// var category = new Category({
// 	name : "Monitors",
// 	image : "eoceoo",
// 	category_id : 4,
// 	parent_id : 0,
// 	top : 0,
// 	column : 0,
// 	sort_order : 0,
// 	status : true,
// });
// console.log(category);
// category.save(function(err,category,affected){
// 	if(err) throw err;
// 	console.log(category);
// });
var mongoose = require('./libs/mongoose');
var async = require('async');
var Category = require('./models/category').Category;

async.series(
	[
		open,
		dropDatabase,
		createCategories,
		closeConnection
	],function(err,results){
		console.log(results);
	}
	);

function open (callback){
	mongoose.connection.on('open',callback);

}

function dropDatabase (callback){
	var db = mongoose.connection.db;
	db.dropDatabase(callback);
}

function createCategories (callback){
	
	var cats = [{"category_id":"25","name":"Components","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"3","status":"1"},{"category_id":"27","name":"Mac","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"20","top":"0","column":"0","sort_order":"2","status":"1"},{"category_id":"20","name":"Desktops","description":"<p>\r\n\tExample of category description text<\/p>\r\n","meta_title":"","meta_description":"Example of category description","meta_keyword":"","image":"catalog\/demo\/compaq_presario.jpg","parent_id":"0","top":"1","column":"1","sort_order":"1","status":"1"},{"category_id":"24","name":"Phones & PDAs","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"5","status":"1"},{"category_id":"18","name":"Laptops & Notebooks","description":"<p>\r\n\tShop Laptop feature only the best laptop deals on the market. By comparing laptop deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, we pride ourselves on offering customers the very best laptop deals. From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - in every colour, style, size and technical spec - is featured on the site at the lowest possible price.<\/p>\r\n","meta_title":"","meta_description":"","meta_keyword":"","image":"catalog\/demo\/hp_2.jpg","parent_id":"0","top":"1","column":"0","sort_order":"2","status":"1"},{"category_id":"17","name":"Software","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"4","status":"1"},{"category_id":"28","name":"Monitors","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"26","name":"PC","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"20","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"29","name":"Mice and Trackballs","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"30","name":"Printers","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"31","name":"Scanners","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"32","name":"Web Cameras","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"33","name":"Cameras","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"6","status":"1"},{"category_id":"34","name":"MP3 Players","description":"<p>\r\n\tShop Laptop feature only the best laptop deals on the market. By comparing laptop deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, we pride ourselves on offering customers the very best laptop deals. From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - in every colour, style, size and technical spec - is featured on the site at the lowest possible price.<\/p>\r\n","meta_title":"","meta_description":"","meta_keyword":"","image":"catalog\/demo\/ipod_touch_4.jpg","parent_id":"0","top":"1","column":"4","sort_order":"7","status":"1"},{"category_id":"35","name":"test 1","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"28","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"36","name":"test 2","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"28","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"37","name":"test 5","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"38","name":"test 4","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"39","name":"test 6","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"40","name":"test 7","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"41","name":"test 8","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"42","name":"test 9","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"43","name":"test 11","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"44","name":"test 12","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"45","name":"Windows","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"18","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"46","name":"Macs","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"18","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"47","name":"test 15","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"48","name":"test 16","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"49","name":"test 17","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"50","name":"test 18","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"51","name":"test 19","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"52","name":"test 20","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"53","name":"test 21","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"54","name":"test 22","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"55","name":"test 23","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"56","name":"test 24","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"57","name":"Tablets","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"3","status":"1"},{"category_id":"58","name":"test 25","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"52","top":"0","column":"0","sort_order":"0","status":"1"}];
	// async.parallel(
	// 	[
	// 	function (callback){
	// 		var category = new Category({"category_id":"25","name":"Components","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"3","status":"1"});
	// 		category.save(function (err,category){
	// 			callback(err,category);
	// 		});
	// 	}
	// 	],
	// 		callback
	// 	);
	async.each (cats,function(category_data,callback){
		var category = new Category(category_data);
		category.save(callback);// (err)
	},callback);
	
}
function closeConnection (callback){
	mongoose.disconnect(callback);
}
