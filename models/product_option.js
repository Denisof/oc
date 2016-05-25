var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema({
	product_option_id : {
		type:Number,
		unique: true,
		require: true
	},
	product_id :{
		type:Number,
		require: true
	},
	option_id : {
		type:Number,
		require: true
	},
	value :{
		type:String
	},
	required : {
		type:Boolean
	}
});

exports.Product_option = mongoose.model('Product_option',schema);

