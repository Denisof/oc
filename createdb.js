var mongoose = require('./libs/mongoose');
var async = require('async');

//var Category = require('./models/category').Category;
//var Product_image = require('./models/product_image').Product_image;
//var Option = require('./models/option').Option;
//var Product = require('./models/product').Product;
//var Product_description = require('./models/product_description').Product_description;
//var Product_option = require('./models/product_option').Product_option;
//var Product_category = require('./models/product_category').Product_category;
//dropDatabase,
async.series(
	[
		open,
		
		createCollections,
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

function createCollections (callback){
	var product_categories = [{"product_id":"28","category_id":"20"},{"product_id":"28","category_id":"24"},{"product_id":"29","category_id":"20"},{"product_id":"29","category_id":"24"},{"product_id":"30","category_id":"20"},{"product_id":"30","category_id":"33"},{"product_id":"31","category_id":"33"},{"product_id":"32","category_id":"34"},{"product_id":"33","category_id":"20"},{"product_id":"33","category_id":"28"},{"product_id":"34","category_id":"34"},{"product_id":"35","category_id":"20"},{"product_id":"36","category_id":"34"},{"product_id":"40","category_id":"20"},{"product_id":"40","category_id":"24"},{"product_id":"41","category_id":"27"},{"product_id":"42","category_id":"20"},{"product_id":"42","category_id":"28"},{"product_id":"43","category_id":"18"},{"product_id":"43","category_id":"20"},{"product_id":"44","category_id":"18"},{"product_id":"44","category_id":"20"},{"product_id":"45","category_id":"18"},{"product_id":"46","category_id":"18"},{"product_id":"46","category_id":"20"},{"product_id":"47","category_id":"18"},{"product_id":"47","category_id":"20"},{"product_id":"48","category_id":"20"},{"product_id":"48","category_id":"34"},{"product_id":"49","category_id":"57"}];
	//var cats = [{"category_id":"25","name":"Components","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"3","status":"1"},{"category_id":"27","name":"Mac","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"20","top":"0","column":"0","sort_order":"2","status":"1"},{"category_id":"20","name":"Desktops","description":"<p>\r\n\tExample of category description text<\/p>\r\n","meta_title":"","meta_description":"Example of category description","meta_keyword":"","image":"catalog\/demo\/compaq_presario.jpg","parent_id":"0","top":"1","column":"1","sort_order":"1","status":"1"},{"category_id":"24","name":"Phones & PDAs","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"5","status":"1"},{"category_id":"18","name":"Laptops & Notebooks","description":"<p>\r\n\tShop Laptop feature only the best laptop deals on the market. By comparing laptop deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, we pride ourselves on offering customers the very best laptop deals. From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - in every colour, style, size and technical spec - is featured on the site at the lowest possible price.<\/p>\r\n","meta_title":"","meta_description":"","meta_keyword":"","image":"catalog\/demo\/hp_2.jpg","parent_id":"0","top":"1","column":"0","sort_order":"2","status":"1"},{"category_id":"17","name":"Software","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"4","status":"1"},{"category_id":"28","name":"Monitors","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"26","name":"PC","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"20","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"29","name":"Mice and Trackballs","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"30","name":"Printers","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"31","name":"Scanners","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"32","name":"Web Cameras","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"25","top":"0","column":"0","sort_order":"1","status":"1"},{"category_id":"33","name":"Cameras","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"6","status":"1"},{"category_id":"34","name":"MP3 Players","description":"<p>\r\n\tShop Laptop feature only the best laptop deals on the market. By comparing laptop deals from the likes of PC World, Comet, Dixons, The Link and Carphone Warehouse, Shop Laptop has the most comprehensive selection of laptops on the internet. At Shop Laptop, we pride ourselves on offering customers the very best laptop deals. From refurbished laptops to netbooks, Shop Laptop ensures that every laptop - in every colour, style, size and technical spec - is featured on the site at the lowest possible price.<\/p>\r\n","meta_title":"","meta_description":"","meta_keyword":"","image":"catalog\/demo\/ipod_touch_4.jpg","parent_id":"0","top":"1","column":"4","sort_order":"7","status":"1"},{"category_id":"35","name":"test 1","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"28","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"36","name":"test 2","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"28","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"37","name":"test 5","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"38","name":"test 4","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"39","name":"test 6","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"40","name":"test 7","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"41","name":"test 8","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"42","name":"test 9","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"43","name":"test 11","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"44","name":"test 12","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"45","name":"Windows","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"18","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"46","name":"Macs","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"18","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"47","name":"test 15","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"48","name":"test 16","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"49","name":"test 17","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"50","name":"test 18","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"51","name":"test 19","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"52","name":"test 20","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"53","name":"test 21","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"54","name":"test 22","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"55","name":"test 23","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"56","name":"test 24","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"34","top":"0","column":"0","sort_order":"0","status":"1"},{"category_id":"57","name":"Tablets","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"0","top":"1","column":"1","sort_order":"3","status":"1"},{"category_id":"58","name":"test 25","description":"","meta_title":"","meta_description":"","meta_keyword":"","image":"","parent_id":"52","top":"0","column":"0","sort_order":"0","status":"1"}];
	//var products = [{"product_id":"28","model":"Product 1","quantity":"939","stock_status_id":"7","image":"catalog\/demo\/htc_touch_hd_1.jpg","price":"100.0000","status":"1"},{"product_id":"29","model":"Product 2","quantity":"999","stock_status_id":"6","image":"catalog\/demo\/palm_treo_pro_1.jpg","price":"279.9900","status":"1"},{"product_id":"30","model":"Product 3","quantity":"6","stock_status_id":"6","image":"catalog\/demo\/canon_eos_5d_1.jpg","price":"100.0000","status":"1"},{"product_id":"31","model":"Product 4","quantity":"1000","stock_status_id":"6","image":"catalog\/demo\/nikon_d300_1.jpg","price":"80.0000","status":"1"},{"product_id":"32","model":"Product 5","quantity":"999","stock_status_id":"6","image":"catalog\/demo\/ipod_touch_1.jpg","price":"100.0000","status":"1"},{"product_id":"33","model":"Product 6","quantity":"1000","stock_status_id":"6","image":"catalog\/demo\/samsung_syncmaster_941bw.jpg","price":"200.0000","status":"1"},{"product_id":"34","model":"Product 7","quantity":"998","stock_status_id":"7","image":"catalog\/demo\/ipod_shuffle_1.jpg","price":"100.0000","status":"1"},{"product_id":"35","model":"Product 8","quantity":"1000","stock_status_id":"5","image":"","price":"100.0000","status":"1"},{"product_id":"36","model":"Product 9","quantity":"994","stock_status_id":"6","image":"catalog\/demo\/ipod_nano_1.jpg","price":"100.0000","status":"1"},{"product_id":"40","model":"product 11","quantity":"954","stock_status_id":"5","image":"catalog\/demo\/iphone_1.jpg","price":"101.0000","status":"1"},{"product_id":"41","model":"Product 14","quantity":"977","stock_status_id":"5","image":"catalog\/demo\/imac_1.jpg","price":"100.0000","status":"1"},{"product_id":"42","model":"Product 15","quantity":"990","stock_status_id":"5","image":"catalog\/demo\/apple_cinema_30.jpg","price":"100.0000","status":"1"},{"product_id":"43","model":"Product 16","quantity":"929","stock_status_id":"5","image":"catalog\/demo\/macbook_1.jpg","price":"500.0000","status":"1"},{"product_id":"44","model":"Product 17","quantity":"1000","stock_status_id":"5","image":"catalog\/demo\/macbook_air_1.jpg","price":"1000.0000","status":"1"},{"product_id":"45","model":"Product 18","quantity":"998","stock_status_id":"5","image":"catalog\/demo\/macbook_pro_1.jpg","price":"2000.0000","status":"1"},{"product_id":"46","model":"Product 19","quantity":"1000","stock_status_id":"5","image":"catalog\/demo\/sony_vaio_1.jpg","price":"1000.0000","status":"1"},{"product_id":"47","model":"Product 21","quantity":"1000","stock_status_id":"5","image":"catalog\/demo\/hp_1.jpg","price":"100.0000","status":"1"},{"product_id":"48","model":"product 20","quantity":"995","stock_status_id":"5","image":"catalog\/demo\/ipod_classic_1.jpg","price":"100.0000","status":"1"},{"product_id":"49","model":"SAM1","quantity":"0","stock_status_id":"8","image":"catalog\/demo\/samsung_tab_1.jpg","price":"199.9900","status":"1"}];
	//var product_descriptions = [{"product_id":"35","name":"Product 8"},{"product_id":"48","name":"iPod Classic"},{"product_id":"40","name":"iPhone"},{"product_id":"28","name":"HTC Touch HD"},{"product_id":"44","name":"MacBook Air"},{"product_id":"45","name":"MacBook Pro"},{"product_id":"29","name":"Palm Treo Pro"},{"product_id":"36","name":"iPod Nano"},{"product_id":"46","name":"Sony VAIO"},{"product_id":"47","name":"HP LP3065"},{"product_id":"32","name":"iPod Touch"},{"product_id":"41","name":"iMac"},{"product_id":"33","name":"Samsung SyncMaster 941BW"},{"product_id":"34","name":"iPod Shuffle"},{"product_id":"43","name":"MacBook"},{"product_id":"31","name":"Nikon D300"},{"product_id":"49","name":"Samsung Galaxy Tab 10.1"},{"product_id":"30","name":"Canon EOS 5D"}];
	//var product_options = [{"product_option_id":"224","product_id":"35","option_id":"11","value":"","required":"1"},{"product_option_id":"225","product_id":"47","option_id":"12","value":"2011-04-22","required":"1"},{"product_option_id":"223","product_id":"42","option_id":"2","value":"","required":"1"},{"product_option_id":"217","product_id":"42","option_id":"5","value":"","required":"1"},{"product_option_id":"209","product_id":"42","option_id":"6","value":"","required":"1"},{"product_option_id":"218","product_id":"42","option_id":"1","value":"","required":"1"},{"product_option_id":"208","product_id":"42","option_id":"4","value":"test","required":"1"},{"product_option_id":"219","product_id":"42","option_id":"8","value":"2011-02-20","required":"1"},{"product_option_id":"222","product_id":"42","option_id":"7","value":"","required":"1"},{"product_option_id":"221","product_id":"42","option_id":"9","value":"22:25","required":"1"},{"product_option_id":"220","product_id":"42","option_id":"10","value":"2011-02-20 22:25","required":"1"},{"product_option_id":"226","product_id":"30","option_id":"5","value":"","required":"1"}];
	//var options = [{"option_id":"1","type":"radio","sort_order":"1"},{"option_id":"2","type":"checkbox","sort_order":"2"},{"option_id":"4","type":"text","sort_order":"3"},{"option_id":"5","type":"select","sort_order":"4"},{"option_id":"6","type":"textarea","sort_order":"5"},{"option_id":"7","type":"file","sort_order":"6"},{"option_id":"8","type":"date","sort_order":"7"},{"option_id":"9","type":"time","sort_order":"8"},{"option_id":"10","type":"datetime","sort_order":"9"},{"option_id":"11","type":"select","sort_order":"10"},{"option_id":"12","type":"date","sort_order":"11"}]
	//var product_images = [{"product_image_id":"2345","product_id":"30","image":"catalog\/demo\/canon_eos_5d_2.jpg","sort_order":"0"},{"product_image_id":"2321","product_id":"47","image":"catalog\/demo\/hp_3.jpg","sort_order":"0"},{"product_image_id":"2035","product_id":"28","image":"catalog\/demo\/htc_touch_hd_2.jpg","sort_order":"0"},{"product_image_id":"2351","product_id":"41","image":"catalog\/demo\/imac_3.jpg","sort_order":"0"},{"product_image_id":"1982","product_id":"40","image":"catalog\/demo\/iphone_6.jpg","sort_order":"0"},{"product_image_id":"2001","product_id":"36","image":"catalog\/demo\/ipod_nano_5.jpg","sort_order":"0"},{"product_image_id":"2000","product_id":"36","image":"catalog\/demo\/ipod_nano_4.jpg","sort_order":"0"},{"product_image_id":"2379","product_id":"34","image":"catalog\/demo\/ipod_shuffle_3.jpg","sort_order":"0"},{"product_image_id":"2378","product_id":"34","image":"catalog\/demo\/ipod_shuffle_2.jpg","sort_order":"0"},{"product_image_id":"2011","product_id":"32","image":"catalog\/demo\/ipod_touch_7.jpg","sort_order":"0"},{"product_image_id":"2010","product_id":"32","image":"catalog\/demo\/ipod_touch_6.jpg","sort_order":"0"},{"product_image_id":"2009","product_id":"32","image":"catalog\/demo\/ipod_touch_5.jpg","sort_order":"0"},{"product_image_id":"1971","product_id":"43","image":"catalog\/demo\/macbook_5.jpg","sort_order":"0"},{"product_image_id":"1970","product_id":"43","image":"catalog\/demo\/macbook_4.jpg","sort_order":"0"},{"product_image_id":"1974","product_id":"44","image":"catalog\/demo\/macbook_air_4.jpg","sort_order":"0"},{"product_image_id":"1973","product_id":"44","image":"catalog\/demo\/macbook_air_2.jpg","sort_order":"0"},{"product_image_id":"1977","product_id":"45","image":"catalog\/demo\/macbook_pro_2.jpg","sort_order":"0"},{"product_image_id":"1976","product_id":"45","image":"catalog\/demo\/macbook_pro_3.jpg","sort_order":"0"},{"product_image_id":"1986","product_id":"31","image":"catalog\/demo\/nikon_d300_3.jpg","sort_order":"0"},{"product_image_id":"1985","product_id":"31","image":"catalog\/demo\/nikon_d300_2.jpg","sort_order":"0"},{"product_image_id":"1988","product_id":"29","image":"catalog\/demo\/palm_treo_pro_3.jpg","sort_order":"0"},{"product_image_id":"1995","product_id":"46","image":"catalog\/demo\/sony_vaio_5.jpg","sort_order":"0"},{"product_image_id":"1994","product_id":"46","image":"catalog\/demo\/sony_vaio_4.jpg","sort_order":"0"},{"product_image_id":"1991","product_id":"48","image":"catalog\/demo\/ipod_classic_4.jpg","sort_order":"0"},{"product_image_id":"1990","product_id":"48","image":"catalog\/demo\/ipod_classic_3.jpg","sort_order":"0"},{"product_image_id":"1981","product_id":"40","image":"catalog\/demo\/iphone_2.jpg","sort_order":"0"},{"product_image_id":"1980","product_id":"40","image":"catalog\/demo\/iphone_5.jpg","sort_order":"0"},{"product_image_id":"2344","product_id":"30","image":"catalog\/demo\/canon_eos_5d_3.jpg","sort_order":"0"},{"product_image_id":"2320","product_id":"47","image":"catalog\/demo\/hp_2.jpg","sort_order":"0"},{"product_image_id":"2034","product_id":"28","image":"catalog\/demo\/htc_touch_hd_3.jpg","sort_order":"0"},{"product_image_id":"2350","product_id":"41","image":"catalog\/demo\/imac_2.jpg","sort_order":"0"},{"product_image_id":"1979","product_id":"40","image":"catalog\/demo\/iphone_3.jpg","sort_order":"0"},{"product_image_id":"1978","product_id":"40","image":"catalog\/demo\/iphone_4.jpg","sort_order":"0"},{"product_image_id":"1989","product_id":"48","image":"catalog\/demo\/ipod_classic_2.jpg","sort_order":"0"},{"product_image_id":"1999","product_id":"36","image":"catalog\/demo\/ipod_nano_2.jpg","sort_order":"0"},{"product_image_id":"1998","product_id":"36","image":"catalog\/demo\/ipod_nano_3.jpg","sort_order":"0"},{"product_image_id":"2377","product_id":"34","image":"catalog\/demo\/ipod_shuffle_4.jpg","sort_order":"0"},{"product_image_id":"2376","product_id":"34","image":"catalog\/demo\/ipod_shuffle_5.jpg","sort_order":"0"},{"product_image_id":"2008","product_id":"32","image":"catalog\/demo\/ipod_touch_2.jpg","sort_order":"0"},{"product_image_id":"2007","product_id":"32","image":"catalog\/demo\/ipod_touch_3.jpg","sort_order":"0"},{"product_image_id":"2006","product_id":"32","image":"catalog\/demo\/ipod_touch_4.jpg","sort_order":"0"},{"product_image_id":"1969","product_id":"43","image":"catalog\/demo\/macbook_2.jpg","sort_order":"0"},{"product_image_id":"1968","product_id":"43","image":"catalog\/demo\/macbook_3.jpg","sort_order":"0"},{"product_image_id":"1972","product_id":"44","image":"catalog\/demo\/macbook_air_3.jpg","sort_order":"0"},{"product_image_id":"1975","product_id":"45","image":"catalog\/demo\/macbook_pro_4.jpg","sort_order":"0"},{"product_image_id":"1984","product_id":"31","image":"catalog\/demo\/nikon_d300_4.jpg","sort_order":"0"},{"product_image_id":"1983","product_id":"31","image":"catalog\/demo\/nikon_d300_5.jpg","sort_order":"0"},{"product_image_id":"1987","product_id":"29","image":"catalog\/demo\/palm_treo_pro_2.jpg","sort_order":"0"},{"product_image_id":"1993","product_id":"46","image":"catalog\/demo\/sony_vaio_2.jpg","sort_order":"0"},{"product_image_id":"1992","product_id":"46","image":"catalog\/demo\/sony_vaio_3.jpg","sort_order":"0"},{"product_image_id":"2327","product_id":"49","image":"catalog\/demo\/samsung_tab_7.jpg","sort_order":"0"},{"product_image_id":"2326","product_id":"49","image":"catalog\/demo\/samsung_tab_6.jpg","sort_order":"0"},{"product_image_id":"2325","product_id":"49","image":"catalog\/demo\/samsung_tab_5.jpg","sort_order":"0"},{"product_image_id":"2324","product_id":"49","image":"catalog\/demo\/samsung_tab_4.jpg","sort_order":"0"},{"product_image_id":"2323","product_id":"49","image":"catalog\/demo\/samsung_tab_3.jpg","sort_order":"0"},{"product_image_id":"2322","product_id":"49","image":"catalog\/demo\/samsung_tab_2.jpg","sort_order":"0"},{"product_image_id":"2317","product_id":"42","image":"catalog\/demo\/canon_logo.jpg","sort_order":"0"},{"product_image_id":"2316","product_id":"42","image":"catalog\/demo\/hp_1.jpg","sort_order":"0"},{"product_image_id":"2315","product_id":"42","image":"catalog\/demo\/compaq_presario.jpg","sort_order":"0"},{"product_image_id":"2314","product_id":"42","image":"catalog\/demo\/canon_eos_5d_1.jpg","sort_order":"0"},{"product_image_id":"2313","product_id":"42","image":"catalog\/demo\/canon_eos_5d_2.jpg","sort_order":"0"}];
	
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
	async.each (product_categories,function(product_categories_data,callback){
		var product_category = new Product_category(product_categories_data);
		product_category.save(callback);// (err)
	},callback);
	
}
function closeConnection (callback){
	mongoose.disconnect(callback);
}
