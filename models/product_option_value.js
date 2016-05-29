// product_option_value
// {"product_option_value_id":"1","product_option_id":"217","product_id":"42","option_id":"5","option_value_id":"41","quantity":"100","subtract":"0","price":"1.0000","price_prefix":"+"}


var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;
var schema = new Schema({
	product_option_value_id: {
		type:Number,
		unique: true,
		require:true
	},
	product_option_id: {
		type:Number
	},
	product_id :{
		type:Number
	},
	option_id : {
		type:Number
	},
	option_value_id :{
		type:Number
	},
	quantity : {
		type:Number
	},
	subtract : {
		type :Boolean
	},
	price : {
		type:Number
	},
	price_prefix : {
		type:String
	}

})


exports.Product_option_value = mongoose.model('Product_option_value',schema);