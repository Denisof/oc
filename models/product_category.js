var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema({
	
	product_id :{
		type:Number,
		require: true
	},
	category_id : {
		type:Number,
		require: true
	}
});

exports.Product_category = mongoose.model('Product_category',schema);
