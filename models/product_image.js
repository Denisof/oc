var mongoose  = require('../libs/mongoose'),
	Schema = mongoose.Schema;

var schema = new Schema({
	product_image_id : {
		type:Number,
		unique: true,
		require:true
	},
	product_id : {
		type:Number,
		require:true
	},
	image : {
		type:String
	}
});


exports.Product_image = mongoose.model('Product_image',schema);
